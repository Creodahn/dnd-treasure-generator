import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Route from '@ember/routing/route';

// this `extends` throws a warning, but need to use a mixin due to how ember-simple-auth works
@classic
export default class ApplicationRoute extends Route.extend(ApplicationRouteMixin) {
  @service
  currentUser;

  routeAfterAuthentication = 'main';

  @service
  session;

  afterModel(resolvedModel, transition) {
    const retransitionTargets = ['application', 'index'];

    if(retransitionTargets.indexOf(transition.targetName) > -1) {
      this.transitionTo('main');
    }

    if(this.session.isAuthenticated) {
      this.currentUser.load();
    }
  }
}
