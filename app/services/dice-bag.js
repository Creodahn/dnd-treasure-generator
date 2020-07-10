import Service, { inject as service } from '@ember/service';

export default Service.extend({
  currentUser: service(),
  store: service(),
  // methods
  async _createRollEvent() {
    const profile = this.currentUser.profile;

    return await this.store.createRecord('dice-roll-event', { profile }).save();
  },
  // the `dice` input to this function is mutually exclusive from the `dieType` and `count` inputs
  // `dice` is an explicit list of dice to be rolled, whereas `dieType` and `count` need to be used together
  // to compose a list of dice to roll
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
      total += roll.result;
    });

    return { rolls, total };
  },
  load(dice) {
    this.set('dice', dice);
    this.set('rollableDice', dice.filter(die => die.showToUser !== false));
  },
  rollDie(dieType, order = 0, diceRollEvent) {
    const attrs = { order, result: null, diceRollEvent },
      die = this.dice.findBy('name', dieType);

    if(die) {
      attrs.die = die;
      attrs.result = Math.floor(Math.random() * (die.ceil - die.floor + 1)) + die.floor;
    }

    if(diceRollEvent) {
      this.store.createRecord('die-roll', attrs).save();
      // TODO: having to have this feels bad. find a better solution
    } else if(this.currentUser.profile) {
      this._createRollEvent().then((event) => {
        attrs.diceRollEvent = event;

        this.store.createRecord('die-roll', attrs).save();
      });
    }

    return attrs;
  },
  rollMultipleDice(params) {
    const profile = this.currentUser.profile;
    let rollEvent = null;

    if(profile) {
      rollEvent = this._createRollEvent();
    }

    return this._rollMultipleDice(params, rollEvent);
  }
});
