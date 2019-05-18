import Controller from '@ember/controller';
import Object, { computed }  from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  // attributes
  diceBag: service(),
  selectedDice: null,
  // computed properties
  displayDice: computed('selectedDice.[]', 'results.[]', function() {
    return this.selectedDice.map((item, index) => {
      const rolls = this.results;

      if(rolls && rolls[index]) {
        item.set('result', rolls[index]);
      }

      return item;
    });
  }),
  // lifecycle
  init() {
    this._super(...arguments);

    this.set('results', []);
    this.set('selectedDice', []);
  },
  // actions 
  actions: {
    addDie(die) {
      this.selectedDice.pushObject(Object.create({ die: die.name }));
    },
    removeDie(index) {
      // remove die from selected dice at index
      const dice = this.selectedDice,
        result = dice.slice(0, index).concat(dice.slice(index + 1, dice.length));

      this.set('selectedDice', result);
    },
    reset() {
      this.set('results', []);
      this.set('selectedDice', []);
    },
    rollDice() {
      const dice = this.selectedDice.map((item) => {
          return item.die;
        }),
        results = this.diceBag.rollMultipleDice({ dice });

      // reset results to force displayDice to update when inserting new results
      this.set('results', []);
      this.set('results', results.rolls);
      // this is the second thing returned in the results object, but we don't display it currently
      this.set('total', results.total);
    }
  }
});
