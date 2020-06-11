import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  // attributes
  createdAt: attr('date'),
  order: attr('number'),
  result: attr('number'),
  updatedAt: attr('date'),
  // relationships
  diceRollEvent: belongsTo('dice-roll-event'),
  die: belongsTo('die')
});
