import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(resolvedModel, transition) {
    const retransitionTargets = ['application', 'index'];

    if(retransitionTargets.indexOf(transition.targetName) > -1) {
      this.transitionTo('main');
    }
  }
});
