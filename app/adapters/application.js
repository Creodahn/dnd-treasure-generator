import DS from 'ember-data';
import ENV from 'dnd-treasure-generator/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.apiURL,
  namespace: 'api'
});
