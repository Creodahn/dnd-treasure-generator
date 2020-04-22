import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const { error } = console;

export default Controller.extend({
  errorText: null,
  session: service(),

  authenticateWithOAuth2() {
    const session = this.session,
      { username, password } = this;

    if(session) {
      session.set('data.login', username);

      session.authenticate('authenticator:oauth2', username, password).catch((reason) => {
        error(reason);
        this.set('errorText', 'Could not validate provided username and password');
      });
    }
  },

  actions: {
    login(e) {
      e.preventDefault();
      this.authenticateWithOAuth2();
    }
  }
});
