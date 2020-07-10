import Component from '@ember/component';
import Object, { computed }  from '@ember/object';
import Inflector from 'ember-inflector';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default Component.extend({
  // services
  diceBag: service(),
  treasureChest: service(),

  // computed properties
  coinRewards: computed('calculations.{[],.@each.coinType}', 'rand', function() {
    return this.calculations ? this.calculateCoinReward() : null;
  }),
  showRewardList: computed('coinRewards', 'rewards', function() {
    return isPresent(this.coinRewards) && isPresent(this.rewards);
  }),

  didReceiveAttrs() {
    this._super(...arguments);

    if(this.model) {
      this.set('rewards', this.calculateReward(this.model));
    }
  },

  // methods
  calculateCoinReward() {
    return this.calculations.map((calculation) => {
      const { coinType, diceCount, dieType, multiplier } = calculation,
        result = this.diceBag.rollMultipleDice({ dieType, count: diceCount });

      result.coinType = coinType;
      result.total = result.total * (multiplier || 1);

      return result;
    });
  },
  calculateReward(rules) {
    const { diceCalculations } = this.getRuleForPercentileRoll(rules);

    return diceCalculations.map(
      (calculation) => {
        const { diceCount, dieType, itemTable, itemType, itemValue, multiplier } = calculation,
          { rolls, total } = this.diceBag.rollMultipleDice({ count: diceCount, dieType }),
          itemsToPickTotal = this.getItemsToPickTotal(multiplier, total),
          inflectedType = this.getInflectedType(itemTable, itemType),
          itemsToChooseFrom = this.getItemsToChooseFrom(inflectedType, itemTable, itemValue),
          selectedItems = [],
          selectedItemNames = [];
        let countedResults = [],
          uniqueItems = [];

        // this loop basically acts as rolling a d100 on whichever table is being used
        // by selecting a random item from whichever set of items should be selected
        for(let i = 0; i < itemsToPickTotal; i++) {
          const roll = this.diceBag.rollFakeDie(itemsToChooseFrom.length);

          selectedItems.push(itemsToChooseFrom[roll]);
        }


        if(inflectedType === 'magicItems') {
          // check each selected item to see if it has children which should be rolled for
          selectedItems.map((item, index) => {
            if(item) {
              const dieRoll = item.dieType ? this.diceBag.rollDie(item.dieType) : null;
  
              item.children.map((child) => {
                if(dieRoll >= child.min && dieRoll <= child.max) {
                  selectedItems[index] = child;
                }
              });
            }
          });
        }

        selectedItems.map((item) => {
          if(item) {
            selectedItemNames.push(item.name);
          }
        });

        selectedItemNames.sort();

        uniqueItems = [...new Set(selectedItemNames)].sort();

        countedResults = uniqueItems.map((name) => {
          return Object.create({
            name,
            count: selectedItemNames.filter((item) => {
              return item === name;
            }).length
          });
        });

        return { items: countedResults, rolls: rolls.map((roll) => roll.result), total: itemsToPickTotal };
      });
  },
  getInflectedType(itemTable, itemType) {
    return itemType && !itemTable ? Inflector.inflector.pluralize(itemType).camelize() : 'magicItems';
  },
  getItemsToChooseFrom(inflectedType, itemTable, itemValue) {
    const treasureChest = this.treasureChest;
    let result = [];

    if(treasureChest[inflectedType]) {
      result = itemTable ? treasureChest[inflectedType].filterBy('table', itemTable) : treasureChest[inflectedType].filterBy('value', itemValue);
    }

    return result;
  },
  getItemsToPickTotal(multiplier, total) {
    return total * (typeof multiplier === 'number' ? multiplier : 1);
  },
  getRuleForPercentileRoll(rules) {
    const diceRoll = this.diceBag.rollDie('d100').result;
    let result = null;

    // each rule has a min/max range that corresponds to the range on the table in the Dungeon Master's handbook
    // TODO: nulls shouldn't be possible, but it would be best to add handling for that
    result = rules.map((rule) => {
      return diceRoll >= rule.min && diceRoll <= rule.max ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];

    return result;
  }
});
