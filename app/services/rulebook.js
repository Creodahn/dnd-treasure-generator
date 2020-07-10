import { isPresent } from '@ember/utils';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  getRuleSetForCr(records, cr) {
    let result = null;
    
    if(records) {
      result = records.map((rule) => {
        const { maxCr, minCr } = rule,
          // it is possible for a CR ruleset range not to have a maximum if the CR is above 17
          skipMaxComparison = !maxCr;
    
        return cr >= minCr && ((!skipMaxComparison && cr <= maxCr) || skipMaxComparison) ? rule : null;
      }).filter((item) => {
        return item !== null;
      })[0];
    }
  
    return result;
  },
  // eslint-disable-next-line camelcase
  async lookupRules(treasure_type) {
    const alreadyLoadedRules = this.get(treasure_type),
      rules = isPresent(alreadyLoadedRules) ? alreadyLoadedRules : await this.store.query('treasure-rule-set', { filter: { treasure_type }, include: 'dice-calculations' });

    this.set(treasure_type, rules);

    return rules;
  }
});
