import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  password: DS.attr('string'),
  username: DS.attr('string', { readOnly: true }),
  // relationships
  profile: DS.belongsTo('profile')
});
