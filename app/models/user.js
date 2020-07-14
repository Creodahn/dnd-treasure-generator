import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo } from '@ember-data/model';

@classic
export default class User extends Model {
  // attributes
  @attr('string')
  password;

  @attr('string', { readOnly: true })
  username;

  // relationships
  @belongsTo('profile')
  profile;
}
