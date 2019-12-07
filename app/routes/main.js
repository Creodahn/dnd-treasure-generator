import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  diceBag: service(),
  model() {
    return this.store.findAll('die').then((dice) => {
      this.diceBag.load(dice);
    });
  }
});
