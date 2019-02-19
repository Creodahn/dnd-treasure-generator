import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  ceil: DS.attr('number'),
  floor: DS.attr('number'),
  name: DS.attr('string'),
  showToUser: DS.attr('boolean')
});
