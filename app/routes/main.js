import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  diceBag: service(),
  model() {
    // return this.store.findAll('die');
    return [];
  },
  setupcontroller(controller, resolvedModel) {
    this._super(controller, resolvedModel);

    this.diceBag.load(resolvedModel);
  }
});
