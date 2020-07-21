import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

@classic
export default class DiceRollEvent extends Model {
  // attributes
  @attr('date')
  createdAt;

  @attr('string')
  route;

  @attr('date')
  updatedAt;

  // relationships
  @hasMany('die-roll')
  dieRolls;

  @belongsTo('profile')
  profile;

  @belongsTo('treasure-rule-set')
  treasureRuleSet;
}
