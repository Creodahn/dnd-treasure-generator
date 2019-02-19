import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  max: DS.attr('number'),
  min: DS.attr('number'),
  // relationships
  diceCalculations: DS.hasMany('dice-calculation', { async: true }),
  treasureRuleSet: DS.belongsTo('treasure-rule-set')
});
