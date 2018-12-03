import DS from 'ember-data';

export default DS.Model.extend({
  maxCr: DS.attr('number'),
  minCr: DS.attr('number'),
  rules: DS.attr('json'),
  treasureType: DS.attr('string')
});
