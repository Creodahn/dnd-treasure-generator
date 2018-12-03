import DS from 'ember-data';

export default DS.Model.extend({
  max: DS.attr('number'),
  min: DS.attr('number'),
  name: DS.attr('string'),
  table: DS.attr('string')
});
