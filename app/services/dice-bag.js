import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import Service, { inject as service } from '@ember/service';

@classic
export default class DiceBagService extends Service {
  // services
  @service
  currentUser;

  @service
  store;

  // computed properties
  @computed('currentUser.profile')
  get canCreateRollEvent() {
    return !isEmpty(this.currentUser.profile);
  }

  // methods
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
  }

  createRollEvent(rolls, route, treasureRuleSet) {
    const profile = this.currentUser.profile;

    // we track the route info to be able to link to the correct url when redisplaying the rolls
    this.store.createRecord('dice-roll-event', { profile, route, treasureRuleSet }).save().then((event) => {
      rolls.map((roll) => {
        roll.diceRollEvent = event;

        this.store.createRecord('die-roll', roll).save();
      });
    });
  }

  load(dice) {
    this.set('dice', dice);
    this.set('rollableDice', dice.filter(die => die.showToUser !== false));
  }

  rollDie(dieType, order = 0) {
    const attrs = { order, result: null },
      die = this.dice.findBy('name', dieType);

    if(die) {
      attrs.die = die;
      attrs.result = Math.floor(Math.random() * (die.ceil - die.floor + 1)) + die.floor;
    }

    return attrs;
  }

  // roll a fake die to get a random number from 1 to the number of sides - 1
  // TODO: these can't currently be recorded as a roll event
  rollFakeDie(numberOfSides) {
    const ceil = numberOfSides - 1,
      floor = 1;

    return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
  }

  rollMultipleDice(params, createEvent) {
    let results = null;

    // this handles the case of a logged in user rolling from the `Roll Dice` screen
    if(this.canCreateRollEvent && createEvent) {
      results = this._rollMultipleDice(params, true);

      this.createRollEvent(results.rolls);
    } else {
      results = this._rollMultipleDice(params);
    }

    return results;
  }
}
