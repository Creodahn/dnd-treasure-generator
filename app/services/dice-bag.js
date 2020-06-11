import Service, { inject as service } from '@ember/service';

export default Service.extend({
  currentUser: service(),
  store: service(),

  load(dice) {
    this.set('dice', dice);
    this.set('rollableDice', dice.filter(die => die.showToUser !== false));
  },

  async rollDie(dieType, order = 0, diceRollEvent) {
    const attrs = { order, result: null, diceRollEvent },
      die = this.dice.findBy('name', dieType);
    let result;

    if(die) {
      attrs.result = Math.floor(Math.random() * (die.ceil - die.floor + 1)) + die.floor;
    }

    if(diceRollEvent) {
      attrs.die = die;
      result = await this.store.createRecord('die-roll', attrs).save();
    } else {
      result = attrs;
    }

    return result;
  },

  _rollMultipleDice({ dice, dieType, count }, rollEvent) {
    const diceToRoll = dice ? dice : [],
      rolls = [];
    let total = 0;

    if(!diceToRoll.length) {
      for(let i = 0; i < count; i++) {
        diceToRoll.push(dieType);
      }
    }
  
    diceToRoll.map((dieType, index) => {
      const roll = this.rollDie(dieType, index, rollEvent);
  
      rolls.push(roll);
      total += roll;
    });

    return { rolls, total };
  },
  rollMultipleDice(params) {
    const profile = this.currentUser.profile;
    let result = null;

    if(profile) {
      result = this.store.createRecord('dice-roll-event', { profile }).save().then((rollEvent) => {
        return this._rollMultipleDice(params, rollEvent);
      });
    } else {
      result = this._rollMultipleDice(params);
    }

    return result;
  }
});
