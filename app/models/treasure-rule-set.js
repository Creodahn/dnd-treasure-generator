import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  // attributes
  maxCr: attr('number'),
  minCr: attr('number'),
  treasureType: attr('string'),
  // relationships
  diceCalculations: hasMany('dice-calculation'),
  treasureRules: hasMany('treasure-rule')
});
