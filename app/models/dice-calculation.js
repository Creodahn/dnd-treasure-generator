import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  coinType: DS.attr('string', { readOnly: true }),
  diceCount: DS.attr('number'),
  dieType: DS.attr('string', { readOnly: true }),
  itemTable: DS.attr('string'),
  itemType: DS.attr('string'),
  itemValue: DS.attr('number'),
  multiplier: DS.attr('number'),
  // relationships
  die: DS.belongsTo('die'),
  treasureRule: DS.belongsTo('treasure-rule')
});
