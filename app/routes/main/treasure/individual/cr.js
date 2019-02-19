import Route from '@ember/routing/route';

export default Route.extend({
  // hooks
  model(params) {
    const ruleSet = this.getRuleForCr(this.modelFor('main.treasure.individual'), params.cr);

    return this.store.query('treasure-rule', { filter: { treasure_rule_set_id: ruleSet.id }, include: 'dice-calculations' });
  },
  // methods
  getRuleForCr(records, cr) {
    return records.map((rule) => {
      const { maxCr, minCr } = rule,
        // it is possible for a CR ruleset range not to have a maximum if
        // the CR is above 17
        skipMaxComparison = !maxCr;

      return cr >= minCr && ((!skipMaxComparison && cr <= maxCr) || skipMaxComparison) ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  },
});
