import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  diceBag: service(),
  model() {
    return this.store.findAll('die');
  },
  setupController(controller, model) {
    this._super(controller, model);

    this.diceBag.load(model);
  }
});
