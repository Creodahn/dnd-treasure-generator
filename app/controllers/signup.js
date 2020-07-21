import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

const { error } = console;

export default class SignupController extends Controller {
  @service
  session;

  @action
  signUp(e) {
    const password = this.password;
    let errors = '';

    e.preventDefault();

    if(!this.model.isValid) {
      errors += 'Please check the provided email and name to make sure they are correct\n';
    }

    if(password !== this.passwordConfirmation) {
      errors += 'The provided password and confirmation do not match';
    }

    if(errors.length === 0) {
      this.store.createRecord('user', { password }).save().then((user) => {
        this.model.user = user;

        this.model.save().then((profile) => {
          const email = profile.email,
            password = this.password;

          this.session.authenticate('authenticator:oauth2', email, password);
        }).catch((reason) => {
          error(reason);
          this.errorText = errors;
        });
      });
    } else {
      this.errorText = errors;
    }
  }
}
