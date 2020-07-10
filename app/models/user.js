import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  // attributes
  password: attr('string'),
  username: attr('string', { readOnly: true }),
  // relationships
  profile: belongsTo('profile')
});
