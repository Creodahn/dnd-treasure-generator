import Service from '@ember/service';

export default Service.extend({
  load(dice) {
    this.dice = dice;
    this.rollableDice = dice.filter(die => die.showToUser !== false);
  },
  rollDie(dieType) {
    const die = this.dice.findBy('name', dieType);
    let result = null;

    if(die) {
      result = Math.floor(Math.random() * (die.ceil - die.floor + 1)) + die.floor;
    }

    return result;
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
  
    diceToRoll.map((dieType) => {
      const roll = this.rollDie(dieType);
  
      rolls.push(roll);
      total += roll;
    });

    return { rolls, total };
  }
});
