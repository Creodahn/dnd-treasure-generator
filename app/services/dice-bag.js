import Service from '@ember/service';

export default Service.extend({
  load(dice) {
    this.dice = dice;
  },
  rollDie(dieType) {
    const die = this.dice.findBy('name', dieType);

    return Math.floor(Math.random() * (die.ceil - die.floor + 1)) + die.floor;
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
