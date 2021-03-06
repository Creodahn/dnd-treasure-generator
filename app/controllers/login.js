import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

const { error } = console;

export default class LoginController extends Controller {
  @service
  currentUser;

  errorText = null;

  @service
  session;

  authenticateWithOAuth2() {
    const { password, session, username } = this;

    if(session) {
      session.data.login = username;

      session.authenticate('authenticator:oauth2', username, password).then(() => {
        this.currentUser.load();
      }).catch((reason) => {
        error(reason);
        this.errorText = 'Could not validate provided username and password';
      });
    }
  }

  @action
  login(e) {
    e.preventDefault();
    this.authenticateWithOAuth2();
  }
}
