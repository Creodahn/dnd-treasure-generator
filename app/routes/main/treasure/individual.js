import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

@classic
export default class IndividualRoute extends Route {
  @service
  rulebook;

  model() {
    return this.rulebook.lookupRules('individual');
  }
}
