import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  // attributes
  createdAt: attr('date'),
  updatedAt: attr('date'),
  // relationships
  dieRolls: hasMany('die-roll'),
  profile: belongsTo('profile'),
  treasureRuleSet: belongsTo('treasure-rule-set')
});
