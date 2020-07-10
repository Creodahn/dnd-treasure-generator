import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  // services
  currentUser: service(),
  store: service(),

  // computed properties
  canCreateRollEvent: computed('currentUser.profile', function() {
    return !isEmpty(this.currentUser.profile);
  }),

  // methods
  createRollEvent(rolls, route) {
    const profile = this.currentUser.profile;

    // we track the route info to be able to link to the correct url when redisplaying the rolls
    this.store.createRecord('dice-roll-event', { profile, route }).save().then((event) => {
      rolls.map((roll) => {
        roll.diceRollEvent = event;

        this.store.createRecord('die-roll', roll).save();
      });
    });
  },

  // the `dice` input to this function is mutually exclusive from the `dieType` and `count` inputs
  // `dice` is an explicit list of dice to be rolled, whereas `dieType` and `count` need to be used together
  // to compose a list of dice to roll
  _rollMultipleDice({ dice, dieType, count }) {
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
      total += roll.result;
    });

    return { rolls, total };
  },

  load(dice) {
    this.set('dice', dice);
    this.set('rollableDice', dice.filter(die => die.showToUser !== false));
  },

  rollDie(dieType, order = 0, createEvent) {
    const attrs = { order, result: null },
      die = this.dice.findBy('name', dieType);

    if(die) {
      attrs.die = die;
      attrs.result = Math.floor(Math.random() * (die.ceil - die.floor + 1)) + die.floor;
    }

    // handle creating an event for a singular roll
    if(this.canCreateRollEvent && createEvent) {
      this.createRollEvent([attrs]);
    }

    return attrs;
  },

  // roll a fake die to get a random number from 1 to the number of sides - 1
  // TODO: these can't currently be recorded as a roll event
  rollFakeDie(numberOfSides) {
    const ceil = numberOfSides - 1,
      floor = 1;

    return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
  },

  rollMultipleDice(params, createEvent) {
    let results = null;

    if(this.canCreateRollEvent && createEvent) {
      results = this._rollMultipleDice(params, true);

      this.createRollEvent(results.rolls);
    } else {
      results = this._rollMultipleDice(params);
    }

    return results;
  }
});
