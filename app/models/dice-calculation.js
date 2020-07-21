import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo } from '@ember-data/model';

@classic
export default class DiceCalculation extends Model {
  // attributes
  @attr('string', { readOnly: true })
  coinType;

  @attr('number')
  diceCount;

  @attr('string', { readOnly: true })
  dieType;

  @attr('string')
  itemTable;

  @attr('string')
  itemType;

  @attr('number')
  itemValue;

  @attr('number')
  multiplier;

  // relationships
  @belongsTo('coin')
  coin;

  @belongsTo('die')
  die;

  @belongsTo('treasure-rule')
  treasureRule;

  @belongsTo('treasure-rule-set')
  treasureRuleSet;
}
