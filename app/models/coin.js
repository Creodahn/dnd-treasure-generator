import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  name: DS.attr('string'),
  value: DS.attr('number'),
  weight: DS.attr('number', { default: 0.02, readOnly: true })
});
