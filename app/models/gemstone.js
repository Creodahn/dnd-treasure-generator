import Model, { attr } from '@ember-data/model';

export default Model.extend({
  // attributes
  description: attr('string'),
  name: attr('string'),
  value: attr('number')
});
