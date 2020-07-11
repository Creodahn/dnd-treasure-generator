import classic from 'ember-classic-decorator';
import Model, { attr } from '@ember-data/model';

@classic
export default class Gemstone extends Model {
  // attributes
  @attr('string')
  description;

  @attr('string')
  name;

  @attr('number')
  value;
}
