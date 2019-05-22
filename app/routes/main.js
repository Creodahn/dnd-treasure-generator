import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
const { log } = console;

export default Route.extend({
  diceBag: service(),
  beforeModel() {
    this.store.findAll('die').then((dice) => {
      this.diceBag.load(dice);
    }).catch((error) => log(error));
  }
});
