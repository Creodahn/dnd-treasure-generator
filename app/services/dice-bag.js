import Service, { inject as service } from '@ember/service';

export default Service.extend({
  currentUser: service(),

  load(dice) {
    this.dice = dice;
    this.rollableDice = dice.filter(die => die.showToUser !== false);
  },
  rollDie(dieType, order = 0) {
    const die = this.dice.findBy('name', dieType);
    let result = null;

    if(die) {
      result = Math.floor(Math.random() * (die.ceil - die.floor + 1)) + die.floor;
    }

    return this.store.createRecord('die-roll', { order, result, profile: this.currentUser.profile }).save().then((dieRoll) => {
      return dieRoll;
    });
  },
  rollMultipleDice({ dice, dieType, count }) {
    const diceToRoll = dice ? dice : [],
      rolls = [];
    let total = 0;

    if(!diceToRoll.length) {
      for(let i = 0; i < count; i++) {
        diceToRoll.push(dieType);
      }
    }
  
    diceToRoll.map((dieType, index) => {
      const roll = this.rollDie(dieType, index);
  
      rolls.push(roll);
      total += roll;
    });

    return { rolls, total };
  }
});
