import Mixin from '@ember/object/mixin';

// this function is shared between individual and hoard rule selection
export default Mixin.create({
  getRuleForCr(records, cr) {
    // TODO: there shouldn't be a way to get no result back, but it would be better to have some handling for that
    return records.map((rule) => {
      const { maxCr, minCr } = rule,
        // it is possible for a CR ruleset range not to have a maximum if the CR is above 17
        skipMaxComparison = !maxCr;

      return cr >= minCr && ((!skipMaxComparison && cr <= maxCr) || skipMaxComparison) ? rule : null;
    }).filter((item) => {
      return item !== null;
    })[0];
  }
});
