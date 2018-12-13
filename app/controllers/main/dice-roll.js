import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import { inject as service } from '@ember/service';
import Object from '@ember/object';

export default Controller.extend({
  // attributes
  diceBag: service(),
  selectedDice: null,
  // computed properties
  displayDice: computed('selectedDice.[]', 'results.[]', function() {
    return this.selectedDice.map((item, index) => {
      if(this.results.length > 0) {
        item.set('result', this.results[index].rolls);
      }

      return item;
    })
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
      });
        
      
      this.results.pushObject(this.diceBag.rollMultipleDice({ dice }));
    }
  }
});
