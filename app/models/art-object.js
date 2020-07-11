import classic from 'ember-classic-decorator';
import Model, { attr } from '@ember-data/model';

@classic
export default class ArtObject extends Model {
  // attributes
  @attr('string')
  name;

  @attr('number')
  value;
}
