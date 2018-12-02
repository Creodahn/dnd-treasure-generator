import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  // attributes
  diceBag: service(),
  // lifecycle hooks
  model() {
    return this.store.findAll('die');
  },
  afterModel(resolvedModel, transition) {
    const retransitionTargets = ['main', 'main.index'];

    this.diceBag.load(resolvedModel);

    if(retransitionTargets.indexOf(transition.targetName) > -1) {
      this.transitionTo('main.home');
    }
  }
});
