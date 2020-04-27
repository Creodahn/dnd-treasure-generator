import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isArray } from '@ember/array';

export default Service.extend({
  session: service(),
  store: service(),

  profile: computed('profileResults.[]', function() {
    return isArray(this.profileResults) ? this.profileResults.firstObject : null;
  }),

  load() {
    if(this.session.isAuthenticated) {
      this.set('profileResults', this.store.query('profile', { filter: { email: this.session.data.login } }));
    }
  }
});
