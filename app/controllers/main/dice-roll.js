import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

class DisplayDie {
  @tracked result;
  @tracked rolls;

  constructor({ die, result }) {
    this.die = die;
    this.result = result;
  }
}

@classic
export default class DiceRollController extends Controller {
  // attributes
  @tracked results;
  @tracked selectedDice;
  @tracked total;

  // services
  @service
  diceBag;

  // computed properties
  @computed('selectedDice.{[],@each.id}', 'results.{[],@each.result}', 'total')
  get displayDice() {
    return this.selectedDice.map((item, index) => {
      return new DisplayDie({ die: item.die, result: this.results?.[index]?.result });
    });
  }

  // lifecycle
  init() {
    super.init(...arguments);

    this.reset();
  }

  // methods
  reset() {
    this.results = [];
    this.selectedDice = [];
  }

  @action
  addDie(die) {
    this.selectedDice.pushObject({ die: die.name });
  }

  @action
  removeDie(index) {
    // remove die from selected dice at index
    const dice = this.selectedDice,
      result = dice.slice(0, index).concat(dice.slice(index + 1, dice.length));

    this.selectedDice = result;
  }

  @action
  rollDice() {
    const dice = this.selectedDice.map((item) => {
        return item.die;
      }),
      results = this.diceBag.rollMultipleDice({ dice }, true);

    this.results = results.rolls;
    // this is the second thing returned in the results object, but we don't display it currently
    this.total = results.total;
  }
}
