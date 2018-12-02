import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  name: DS.attr('string'),
  value: DS.attr('number'),
  weight: DS.attr('number')
});
