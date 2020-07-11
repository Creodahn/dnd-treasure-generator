import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

@classic
export default class TreasureRule extends Model {
  // attributes
  @attr('number')
  max;

  @attr('number')
  min;

  // relationships
  @hasMany('dice-calculation', { async: true })
  diceCalculations;

  @belongsTo('treasure-rule-set')
  treasureRuleSet;
}
