import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Inflector from 'ember-inflector';
import Object from '@ember/object';

export default Controller.extend({
  // attributes
  cr: null,
  diceBag: service(),
  // methods
  getRuleForPercentileRoll(diceRoll, ruleSet) {
    return ruleSet.rules.data.map((rule) => {
      return diceRoll >= rule.min && diceRoll <= rule.max ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  },
  getRuleForCr() {
    const cr = this.cr;

    return this.model.map((rule) => {
      const { maxCr, minCr } = rule,
        // it is possible for a CR ruleset range not to have a maximum if
        // the CR is above 17
        skipMaxComparison = !maxCr;

      return cr >= minCr && ((!skipMaxComparison && cr <= maxCr) || skipMaxComparison) ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  },
  // actions
  actions: {
    calculateReward() {
      const d100Result = this.diceBag.rollDie('d100'),
        crRule = this.getRuleForCr(),
        { calculations } = this.getRuleForPercentileRoll(d100Result, crRule);

      this.set('rewards', calculations.map(
        (calculation) => {
          const { diceCount, dieType, items, multiplier } = calculation,
            { rolls, total } = this.diceBag.rollMultipleDice({ count: diceCount, dieType }),
            itemsToPickTotal = total * (multiplier || 1),
            inflectedType = Inflector.inflector.pluralize(items.type).camelize(),
            itemsToChooseFrom =items.table ? this[inflectedType].filterBy('table', items.table) : this[inflectedType].filterBy('value', items.value),
            selectedItems = [];
          let uniqueItems = [],
            countedResults = [];

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
        })
      );
    }
  }
});
