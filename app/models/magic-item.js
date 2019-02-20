import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  dieType: DS.attr('string'),
  max: DS.attr('number'),
  min: DS.attr('number'),
  name: DS.attr('string'),
  table: DS.attr('string'),
  // relationships
  children: DS.hasMany('magic-item', { async: false, inverse: 'parent' }),
  die: DS.belongsTo('die'),
  parent: DS.belongsTo('magic-item', { inverse: 'children' })
});
