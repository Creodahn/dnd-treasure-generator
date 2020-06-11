import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  // attributes
  name: attr('string'),
  value: attr('number'),
  weight: attr('number', { default: 0.02, readOnly: true }),
  // relationships
  diceCalculations: hasMany('dice-calculation')
});
