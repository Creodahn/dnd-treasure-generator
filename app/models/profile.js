import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

@classic
export default class Profile extends Model {
  // attributes
  @attr('string')
  email;

  @attr('string')
  name;

  // computed properties
  @computed('email', 'name')
  get isValid() {
    return isPresent(this.email) && isPresent(this.name);
  }

  // relationships
  @hasMany('dice-roll-event')
  diceRollEvents;

  @belongsTo('user')
  user;
}
