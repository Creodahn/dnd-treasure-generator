import classic from 'ember-classic-decorator';
import Model, { attr, hasMany } from '@ember-data/model';

@classic
export default class Coin extends Model {
  // attributes
  @attr('string')
  name;

  @attr('number')
  value;

  @attr('number', { default: 0.02, readOnly: true })
  weight;

  // relationships
  @hasMany('dice-calculation')
  diceCalculations;
}
