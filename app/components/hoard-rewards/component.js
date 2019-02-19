import Component from '@ember/component';
import { computed }  from '@ember/object';
import { getOwner }  from '@ember/application';
import Inflector from 'ember-inflector';
import { inject as service } from '@ember/service';
import Object from '@ember/object';

export default Component.extend({
  // attributes
  diceBag: service(),
  // computed properties
  rewards: computed('model.[]', function() {
    if(this.model) {
      return this.calculateReward(this.model);
    }
  }),
  // methods
  calculateReward(rules) {
    const { diceCalculations } = this.getRuleForPercentileRoll(rules),
      rewardSource = getOwner(this).lookup('controller:main.treasure.hoard');

    return diceCalculations.map(
      (calculation) => {
        const { diceCount, dieType, itemTable, itemType, itemValue, multiplier } = calculation,
          { rolls, total } = this.diceBag.rollMultipleDice({ count: diceCount, dieType }),
          itemsToPickTotal = total * (multiplier || 1),
          inflectedType = Inflector.inflector.pluralize(itemType).camelize(),
          itemsToChooseFrom = itemTable ? rewardSource[inflectedType].filterBy('table', itemTable) : rewardSource[inflectedType].filterBy('value', itemValue),
          selectedItems = [];
        let countedResults = [],
          uniqueItems = [];

        for(let i = 0; i < itemsToPickTotal; i++) {
          selectedItems.push(itemsToChooseFrom[ Math.floor(Math.random() * (itemsToChooseFrom.length - 0))].name);
        }

        selectedItems.sort();

        uniqueItems = [...new Set(selectedItems)].sort();

        countedResults = uniqueItems.map((name) => {
          return Object.create({
            name,
            count: selectedItems.filter((item) => {
              return item === name;
            }).length
          });
        });

        return { items: countedResults, rolls, total: itemsToPickTotal };
      });
  },
  getRuleForPercentileRoll(rules) {
    const diceRoll = this.diceBag.rollDie('d100');

    // each rule has a min/max range that corresponds to the range on the table in the Dungeon Master's handbook
    // TODO: nulls shouldn't be possible, but it would be best to add handling for that
    return rules.map((rule) => {
      return diceRoll >= rule.min && diceRoll <= rule.max ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  },
});
