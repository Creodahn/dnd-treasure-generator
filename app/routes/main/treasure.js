import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(resolvedModel, transition) {
    const retransitionTargets = ['main.treasure', 'main.treasure.index'];

    if(retransitionTargets.indexOf(transition.target) > -1) {
      this.transitionTo('main.treasure.individual');
    }
  }
});
