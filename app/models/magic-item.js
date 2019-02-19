import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  max: DS.attr('number'),
  min: DS.attr('number'),
  name: DS.attr('string'),
  table: DS.attr('string'),
  // relationships
  die: DS.belongsTo('die'),
  parent: DS.attr('magic-item')
});
