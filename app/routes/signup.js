import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

// this `extends` throws a warning, but need to use a mixin due to how ember-simple-auth works
@classic
export default class SignupRoute extends Route.extend(UnauthenticatedRouteMixin) {
  routeIfAlreadyAuthenticated = 'main';

  model() {
    return this.store.createRecord('profile');
  }
}
