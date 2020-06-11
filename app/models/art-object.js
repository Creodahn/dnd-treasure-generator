import Model, { attr } from '@ember-data/model';

export default Model.extend({
  // attributes
  name: attr('string'),
  value: attr('number')
});
