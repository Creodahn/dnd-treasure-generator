import GetCrRule from 'dnd-treasure-generator/mixins/get-cr-rule';
import { getOwner }  from '@ember/application';
import Route from '@ember/routing/route';

export default Route.extend(GetCrRule, {
  // attributes
  queryParams: {
    rand: {
      refreshModel: true
    }
  },
  // hooks
  model(params) {
    const ctrl = getOwner(this).lookup('controller:main/treasure/hoard'),
      ruleSet = this.getRuleForCr(this.modelFor('main.treasure.hoard').treasureRuleSets, params.cr);

    // this ensures that even on reload the CR input has a value
    if(!ctrl.cr) {
      ctrl.set('cr', params.cr);
    }

    return this.store.query('treasure-rule', { filter: { treasure_rule_set_id: ruleSet.id }, include: 'dice-calculations' });
  }
});
