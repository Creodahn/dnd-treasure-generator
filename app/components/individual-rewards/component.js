import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class IndividualRewards extends Component {
  // attributes
  @tracked calculations;
  @tracked cr;
  @tracked model;
  @tracked rewards;

  // services
  @service
  diceBag;

  @service
  rulebook;

  // lifecycle
  constructor() {
    super(...arguments);

    this.rollsToTrack = [];
  }

  // methods
  async calculateReward() {
    const diceCalculations = await this.getRuleForPercentileRoll(this.model);
    let result = [{ rolls : [], total: 0 }];

    if(diceCalculations) {
      result = diceCalculations.map((calculation) => {
        const { coinType, diceCount, dieType, multiplier } = calculation,
          result = this.diceBag.rollMultipleDice({ dieType, count: diceCount });
  
        result.coinType = coinType;
        result.total = result.total * (multiplier || 1);

        return result;
      });
    }

    this.rewards = result;
  }

  getRuleForPercentileRoll(rules) {
    const diceRoll = this.diceBag.rollDie('d100');
    let result = null;

    this.rollsToTrack.pushObject(diceRoll);

    // each rule has a min/max range that corresponds to the range on the table in the Dungeon Master's handbook
    // TODO: nulls shouldn't be possible, but it would be best to add handling for that
    result = rules.map((rule) => {
      return diceRoll.result >= rule.min && diceRoll.result <= rule.max ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];

    return result ? result.get('diceCalculations') : [];
  }

  // TODO: make this more resilient if the input is bad
  @action
  selectCR(selectedCr) {
    const cr = parseInt(selectedCr.replace(/[A-Za-z]+/g, '')),
      ruleSet = this.rulebook.getRuleSetForCr('individual', cr);

    this.calculations = ruleSet.diceCalculations;
    // ensure we're updating to show the actual number instead of the pre-formatted value
    this.cr = cr.toString();
    this.model = ruleSet.treasureRules;

    this.calculateReward();
  }
}
