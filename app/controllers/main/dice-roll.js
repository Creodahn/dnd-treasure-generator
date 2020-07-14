import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import Object, { action, computed } from '@ember/object';

@classic
export default class DiceRollController extends Controller {
  // attributes
  @service
  diceBag;

  selectedDice = null;

  // computed properties
  @computed('selectedDice.[]', 'results.[]')
  get displayDice() {
    return this.selectedDice.map((item, index) => {
      const rolls = this.results;

      if(rolls && rolls[index]) {
        item.set('result', rolls[index].result);
      }

      return item;
    });
  }

  // lifecycle
  init() {
    super.init(...arguments);

    this.reset();
  }

  // methods
  reset() {
    this.set('results', []);
    this.set('selectedDice', []);
  }

  @action
  addDie(die) {
    this.selectedDice.pushObject(Object.create({ die: die.name }));
  }

  @action
  removeDie(index) {
    // remove die from selected dice at index
    const dice = this.selectedDice,
      result = dice.slice(0, index).concat(dice.slice(index + 1, dice.length));

    this.set('selectedDice', result);
  }

  @action
  rollDice() {
    const dice = this.selectedDice.map((item) => {
        return item.die;
      }),
      results = this.diceBag.rollMultipleDice({ dice }, true);

    // reset results to force displayDice to update when inserting new results
    this.set('results', []);
    this.set('results', results.rolls);
    // this is the second thing returned in the results object, but we don't display it currently
    this.set('total', results.total);
  }
}
