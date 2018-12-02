import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // attributes
  cr: null,
  diceBag: service(),
  reward: null,
  // methods
  getCalculation(diceRoll, ruleSet) {
    return ruleSet.rules.map((rule) => {
      return diceRoll >= rule.min && diceRoll <= rule.max ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  },
  getRuleForCr() {
    const cr = this.cr;

    return this.model.map((rule) => {
      return cr >= rule.minCr && cr <= rule.maxCr ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  },
  // actions
  actions: {
    calculateReward() {
      const d100Result = this.diceBag.rollDie('d100'),
        { coinType, diceCount, dieType } = this.getCalculation(d100Result, this.getRuleForCr()),
        result = this.diceBag.rollMultipleDice({ dieType, count: diceCount });

      this.set('reward', `${result.total} ${coinType}`);
    }
  }
});
