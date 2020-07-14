import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

@classic
export default class HoardRoute extends Route {
  @service
  rulebook;

  model() {
    return this.rulebook.lookupRules('hoard');
  }
}
