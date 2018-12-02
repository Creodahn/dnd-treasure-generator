import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(resolvedModel, transition) {
    if(transition.target === 'application') {
      this.transitionTo('main');
    }
  }
});
