import getRuleForCr from 'dnd-treasure-generator/utils/get-cr-rule';
import { getOwner }  from '@ember/application';
import { hash }  from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  // attributes
  getRuleForCr,
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

    return hash({
      setCalculations: ruleSet.diceCalculations,
      rules: this.store.query('treasure-rule', { filter: { treasure_rule_set_id: ruleSet.id }, include: 'dice-calculations' })
    });
  },
  setupController(controller, model) {
    this._super(controller, model.rules);

    controller.set('calculations', model.setCalculations);
  }
});
