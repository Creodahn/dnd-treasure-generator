import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

@classic
export default class LoginRoute extends Route.extend(UnauthenticatedRouteMixin) {
  routeIfAlreadyAuthenticated = 'main';
}
