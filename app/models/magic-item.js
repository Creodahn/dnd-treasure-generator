import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  // attributes
  dieType: attr('string'),
  max: attr('number'),
  min: attr('number'),
  name: attr('string'),
  table: attr('string'),
  // relationships
  children: hasMany('magic-item', { async: false, inverse: 'parent' }),
  die: belongsTo('die'),
  parent: belongsTo('magic-item', { inverse: 'children' })
});
