import DS from 'ember-data';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default DS.Model.extend({
  // attributes
  email: DS.attr('string'),
  name: DS.attr('string'),
  // computed properties
  isValid: computed('email', 'name', function() {
    return isPresent(this.email) && isPresent(this.name);
  }),
  // relationships
  user: DS.belongsTo('user')
});
