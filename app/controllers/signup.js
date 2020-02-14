import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
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
          this.model.set('user', user);

          this.model.save().then((profile) => {
            const email = profile.email,
              password = this.password;

            this.session.authenticate('authenticator:oauth2', email, password);
          }).catch((reason) => {
            console.log(reason);
          }).catch((reason) => {
            console.log(reason);
          })
        })
      } else {
        this.set('errorText', errors);
      }
    }
  }
});
