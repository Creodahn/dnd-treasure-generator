import classic from 'ember-classic-decorator';
import Model, { attr, hasMany } from '@ember-data/model';

@classic
export default class Die extends Model {
  // attributes
  @attr('number')
  ceil;

  @attr('number')
  floor;

  @attr('string')
  name;

  @attr('boolean')
  showToUser;

  // relationships
  @hasMany('dice-calculation')
  diceCalculations;
}
