import classic from 'ember-classic-decorator';
import ENV from 'dnd-treasure-generator/config/environment';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

@classic
export default class Oauth2 extends OAuth2PasswordGrantAuthenticator {
  serverTokenEndpoint = `${ENV.APP.apiURL}/login`;
  refreshAccessTokens = true;
  serverTokenRevocationEndpoint = `${ENV.APP.apiURL}/logout`;
}
