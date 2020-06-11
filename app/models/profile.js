import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
  // attributes
  email: attr('string'),
  name: attr('string'),
  // computed properties
  isValid: computed('email', 'name', function() {
    return isPresent(this.email) && isPresent(this.name);
  }),
  // relationships
  diceRollEvents: hasMany('dice-roll-event'),
  user: belongsTo('user')
});
