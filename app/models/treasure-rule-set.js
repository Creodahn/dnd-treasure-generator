import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  maxCr: DS.attr('number'),
  minCr: DS.attr('number'),
  treasureType: DS.attr('string'),
  // relationships
  diceCalculations: DS.hasMany('dice-calculation'),
  treasureRules: DS.hasMany('treasure-rule')
});
