import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  diceBag: service(),
  afterModel(resolvedModel, transition) {
    const retransitionTargers = ['application', 'index'];

    if(retransitionTargers.indexOf(transition.targetName) > -1) {
      this.transitionTo('main');
    }
  },
  beforeModel() {
    this.diceBag.load(this.store.findAll('die'));
  }
});
