import DS from 'ember-data';

export default DS.Model.extend({
  ceil: DS.attr('number'),
  floor: DS.attr('number'),
  name: DS.attr('string')
});
