import Component from '@ember/component';
import { computed }  from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  // attributes
  diceBag: service(),
  // computed properties
  rewards: computed('model.[]', function() {
    return this.calculateReward(this.model);
  }),
  // methods
  calculateReward(rules) {
    const { diceCalculations } = this.getRuleForPercentileRoll(rules);

    return diceCalculations.map((calculation) => {
      const { coinType, diceCount, dieType, multiplier } = calculation,
        result = this.diceBag.rollMultipleDice({ dieType, count: diceCount });

      result.coinType = coinType;
      result.total = result.total * (multiplier || 1);

      return result;
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
  }
});
