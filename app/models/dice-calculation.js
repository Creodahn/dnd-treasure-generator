import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  // attributes
  coinType: attr('string', { readOnly: true }),
  diceCount: attr('number'),
  dieType: attr('string', { readOnly: true }),
  itemTable: attr('string'),
  itemType: attr('string'),
  itemValue: attr('number'),
  multiplier: attr('number'),
  // relationships
  coin: belongsTo('coin'),
  die: belongsTo('die'),
  treasureRule: belongsTo('treasure-rule'),
  treasureRuleSet: belongsTo('treasure-rule-set')
});
