import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import EmberObject, { action, computed } from '@ember/object';
import Inflector from 'ember-inflector';

@classic
export default class HoardRewards extends Component {
  // services
  @service
  diceBag;

  @service
  router;

  @service
  rulebook;

  @service
  treasureChest;

  // computed properties
  @computed('coinRewards', 'rewards')
  get hasRewards() {
    return !!this.coinRewards || !!this.rewards;
  }

  // lifecycle
  init() {
    super.init(...arguments);

    this.set('rollsToTrack', []);
  }

  // methods
  calculateCoinReward() {
    return this.calculations.map((calculation) => {
      const { coinType, diceCount, dieType, multiplier } = calculation,
        result = this.diceBag.rollMultipleDice({ dieType, count: diceCount });

      result.coinType = coinType;
      result.total = result.total * (multiplier || 1);

      result.rolls.map((roll) => {
        this.rollsToTrack.pushObject(roll);
      });

      this.set('coinRewards', EmberObject.create(result));
    });
  }

  async calculateReward() {
    const diceCalculations = await this.getRuleForPercentileRoll(this.model);
    let results = null;

    if(this.calculations) {
      this.calculateCoinReward();
    }

    results = diceCalculations.map((this.runCalculation).bind(this));

    this.set('rewards', results);

    // make the roll history
    this.trackRolls();
  }

  countUniqueItems(selectedItems) {
    const selectedItemNames = selectedItems.map((item) => {
        let result = '';

        if(item) {
          result = item.name;
        }

        return result;
      }).filter((item) => item !== ''),
      uniqueItems = [...new Set(selectedItemNames)].sort();

    selectedItemNames.sort();

    return uniqueItems.map((name) => {
      return EmberObject.create({
        name,
        count: selectedItemNames.filter((item) => {
          return item === name;
        }).length
      });
    });
  }

  getInflectedType(itemTable, itemType) {
    return itemType && !itemTable ? Inflector.inflector.pluralize(itemType).camelize() : 'magicItems';
  }

  getItemsToChooseFrom(inflectedType, itemTable, itemValue) {
    const treasureChest = this.treasureChest;
    let result = [];

    if(treasureChest[inflectedType]) {
      result = itemTable ? treasureChest[inflectedType].filterBy('table', itemTable) : treasureChest[inflectedType].filterBy('value', itemValue);
    }

    return result;
  }

  getItemsToPickTotal(multiplier, total) {
    return total * (typeof multiplier === 'number' ? multiplier : 1);
  }

  getRuleForPercentileRoll(rules) {
    const diceRoll = this.diceBag.rollDie('d100');
    let result = null;

    this.rollsToTrack.pushObject(diceRoll);

    // each rule has a min/max range that corresponds to the range on the table in the Dungeon Master's handbook
    result = rules.map((rule) => {
      return diceRoll.result >= rule.min && diceRoll.result <= rule.max ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];

    return result ? result.get('diceCalculations') : [];
  }

  runCalculation(calculation) {
    const { diceCount, dieType, itemTable, itemType, itemValue, multiplier } = calculation,
      { rolls, total } = this.diceBag.rollMultipleDice({ count: diceCount, dieType }),
      itemsToPickTotal = this.getItemsToPickTotal(multiplier, total),
      inflectedType = this.getInflectedType(itemTable, itemType),
      itemsToChooseFrom = this.getItemsToChooseFrom(inflectedType, itemTable, itemValue),
      selectedItems = [];
    let countedResults = [];

    rolls.map((roll) => this.rollsToTrack.pushObject(roll));

    // this loop basically acts as rolling a d100 on whichever table is being used
    // by selecting a random item from whichever set of items should be selected
    for(let i = 0; i < itemsToPickTotal; i++) {
      const roll = this.diceBag.rollFakeDie(itemsToChooseFrom.length);

      selectedItems.pushObject(itemsToChooseFrom[roll]);
    }

    if(inflectedType === 'magicItems') {
      // check each selected item to see if it has children which should be rolled for
      selectedItems.map((item, index) => {
        if(item) {
          const dieRoll = item.dieType ? this.diceBag.rollDie(item.dieType) : null;

          item.children.map((child) => {
            if(dieRoll >= child.min && dieRoll <= child.max) {
              this.rollsToTrack.pushObject(dieRoll);

              selectedItems[index] = child;
            }
          });
        }
      });
    }

    countedResults = this.countUniqueItems(selectedItems);

    return EmberObject.create({ items: countedResults, rolls, total: itemsToPickTotal });
  }

  trackRolls() {
    // this forces the ordering to match the overall order in which the rolls were made and overrides the default ordering logic
    this.rollsToTrack.map((roll, index) => roll.order = index);

    this.diceBag.createRollEvent(this.rollsToTrack, this.router.currentRouteName, this.model);

    this.set('rollsToTrack', []);
  }

  // TODO: make this more resilient if the input is bad
  @action
  selectCR(selectedCr) {
    const cr = parseInt(selectedCr.replace(/[A-Za-z]+/g, '')),
      ruleSet = this.rulebook.getRuleSetForCr('hoard', cr);

    this.set('calculations', ruleSet.diceCalculations);
    // ensure we're updating to show the actual number instead of the pre-formatted value
    this.set('cr', cr.toString());
    this.set('model', ruleSet.treasureRules);

    this.calculateReward();
  }
}
