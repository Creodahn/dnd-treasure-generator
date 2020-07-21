import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

@classic
export default class RollHistoryRoute extends Route {
  @service
  currentUser;

  model() {
    return this.currentUser.load();
  }
}
