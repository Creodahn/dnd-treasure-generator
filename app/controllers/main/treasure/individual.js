import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // attributes
  cr: null,
  diceBag: service(),
  rewards: null,
  // methods
  getRuleForPercentileRoll(diceRoll, ruleSet) {
    return ruleSet.rules.map((rule) => {
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

      console.log(cr, maxCr, skipMaxComparison);

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

      console.log(crRule);

      this.set('rewards', calculations.map((calculation) => {
          const { coinType, diceCount, dieType, multiplier } = calculation,
            result = this.diceBag.rollMultipleDice({ dieType, count: diceCount });

            console.log(calculation);

            result.coinType = coinType;
            result.d100Result = d100Result;
            result.total = result.total * (multiplier || 1);

          return result;
        })
      );
    },
    reset() {
      this.set('reward', null);
    }
  }
});
