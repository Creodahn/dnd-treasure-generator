export default function getRuleForCr(records, cr) {
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
}
