import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Route from '@ember/routing/route';

export default Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: 'main',

  afterModel(resolvedModel, transition) {
    const retransitionTargets = ['application', 'index'];

    if(retransitionTargets.indexOf(transition.targetName) > -1) {
      this.transitionTo('main');
    }
  }
});
