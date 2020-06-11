import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  // attributes
  ceil: attr('number'),
  floor: attr('number'),
  name: attr('string'),
  showToUser: attr('boolean'),
  // relationships
  diceCalculations: hasMany('dice-calculation')
});
