import ENV from 'dnd-treasure-generator/config/environment';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrantAuthenticator.extend({
  serverTokenEndpoint: `${ENV.APP.apiURL}/login`,
  refreshAccessTokens: true,
  serverTokenRevocationEndpoint: `${ENV.APP.apiURL}/logout`
});
