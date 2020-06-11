import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  // attributes
  max: attr('number'),
  min: attr('number'),
  // relationships
  diceCalculations: hasMany('dice-calculation', { async: true }),
  treasureRuleSet: belongsTo('treasure-rule-set')
});
