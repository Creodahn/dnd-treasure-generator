import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import Service, { inject as service } from '@ember/service';

@classic
export default class CurrentUserService extends Service {
  @service
  session;

  @service
  store;

  @computed('_profile')
  get profile() {
    return this._profile;
  }

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
}
