import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  routeAfterAuthentication: 'main',
  session: service(),

  afterModel(resolvedModel, transition) {
    const retransitionTargets = ['application', 'index'];

    if(retransitionTargets.indexOf(transition.targetName) > -1) {
      this.transitionTo('main');
    }

    if(this.session.isAuthenticated && isEmpty(this.currentUser.profile)) {
      this.currentUser.load();
    }
  }
});
