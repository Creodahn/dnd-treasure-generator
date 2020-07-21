import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo } from '@ember-data/model';

@classic
export default class DieRoll extends Model {
  // attributes
  @attr('date')
  createdAt;

  @attr('number')
  order;

  @attr('number')
  result;

  @attr('date')
  updatedAt;

  // relationships
  @belongsTo('dice-roll-event')
  diceRollEvent;

  @belongsTo('die')
  die;
}
