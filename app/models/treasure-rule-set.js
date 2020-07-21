import classic from 'ember-classic-decorator';
import Model, { attr, hasMany } from '@ember-data/model';

@classic
export default class TreasureRuleSet extends Model {
  // attributes
  @attr('number')
  maxCr;

  @attr('number')
  minCr;

  @attr('string')
  treasureType;

  // relationships
  @hasMany('dice-calculation', { async: false })
  diceCalculations;

  @hasMany('treasure-rule', { async: false })
  treasureRules;
}
