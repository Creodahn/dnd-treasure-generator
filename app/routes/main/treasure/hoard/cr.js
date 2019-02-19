import Route from '@ember/routing/route';

export default Route.extend({
  // hooks
  model(params) {
    const ruleSet = this.getRuleForCr(this.modelFor('main.treasure.hoard').treasureRuleSets, params.cr);

    return this.store.query('treasure-rule', { filter: { treasure_rule_set_id: ruleSet.id }, include: 'dice-calculations' });
  },
  // methods
  getRuleForCr(records, cr) {
    return records.map((ruleSet) => {
      const { maxCr, minCr } = ruleSet,
        // it is possible for a CR ruleset range not to have a maximum if
        // the CR is above 17
        skipMaxComparison = !maxCr;

      // find ruleset that contains selected CR in its range, or above its min if CR is > 17, otherwise return null
      // TODO: nulls shouldn't be possible, but it would be best to add handling for that
      return cr >= minCr && ((!skipMaxComparison && cr <= maxCr) || skipMaxComparison) ? ruleSet : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  },
});
