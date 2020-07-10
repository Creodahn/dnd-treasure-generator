import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  session: service(),
  store: service(),

  profile: computed('_profile', function() {
    return this._profile;
  }),

  load() {
    if(this.session.isAuthenticated && !this._profile) {
      return this.store.query('profile', { filter: { email: this.session.data.login } }).then((result) => {
        const first = result.firstObject;

        this.set('_profile', first);

        return first;
      });
    } else {
      return new Promise((resolve) => {
        resolve(this.profile);
      });
    }
  }
});
