import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

@classic
export default class MainRoute extends Route {
  @service
  diceBag;

  @service
  treasureChest;

  model() {
    return this.store.findAll('die').then((dice) => {
      this.diceBag.load(dice);
      this.treasureChest.load();
    });
  }
}
