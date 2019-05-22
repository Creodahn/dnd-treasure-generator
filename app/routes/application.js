import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(resolvedModel, transition) {
    const retransitionTargers = ['application', 'index'];

    if(retransitionTargers.indexOf(transition.targetName) > -1) {
      this.transitionTo('main');
    }
  }
});
