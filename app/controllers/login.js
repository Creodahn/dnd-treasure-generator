import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

const { error } = console;

export default Controller.extend({
  currentUser: service(),
  errorText: null,
  session: service(),

  authenticateWithOAuth2() {
    const { password, session, username } = this;

    if(session) {
      session.set('data.login', username);

      session.authenticate('authenticator:oauth2', username, password).then(() => {
        this.currentUser.load();
      }).catch((reason) => {
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
