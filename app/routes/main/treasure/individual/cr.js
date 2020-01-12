import getRuleForCr from 'dnd-treasure-generator/utils/get-cr-rule';
import { getOwner }  from '@ember/application';
import Route from '@ember/routing/route';

export default Route.extend({
  getRuleForCr,
  queryParams: {
    rand: {
      refreshModel: true
    }
  },
  // hooks
  model(params) {
    const ctrl = getOwner(this).lookup('controller:main/treasure/individual'),
      ruleSet = this.getRuleForCr(this.modelFor('main.treasure.individual'), params.cr);

    // this ensures that even on reload the CR input has a value
    if(!ctrl.cr) {
      ctrl.set('cr', params.cr);
    }

    return this.store.query('treasure-rule', { filter: { treasure_rule_set_id: ruleSet.id }, include: 'dice-calculations' });
  }
});
