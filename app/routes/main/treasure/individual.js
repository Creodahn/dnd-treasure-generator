import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  rulebook: service(),

  model() {
    return this.rulebook.lookupRules('individual');
  }
});
