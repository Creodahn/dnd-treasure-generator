import { computed } from '@ember/object';
import JSONAPIAdapter from '@ember-data/adapter/json-api';
// eslint-disable-next-line ember/no-mixins
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'dnd-treasure-generator/config/environment';

// this `extends` throws a warning, but need to use a mixin due to how ember-simple-auth works
export default class ApplicationAdapter extends JSONAPIAdapter.extend(DataAdapterMixin) {
  host = ENV.APP.apiURL;
  namespace = 'api';

  @computed('session.{data.authenticated.access_token,isAuthenticated}')
  get headers() {
    const headers = {};

    if(this.session.isAuthenticated) {
      // OAuth 2
      headers.Authorization = `Bearer ${this.session.data.authenticated.access_token}`;
    }

    return headers;
  }
}
