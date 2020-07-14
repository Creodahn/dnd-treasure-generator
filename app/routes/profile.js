import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class ProfileRoute extends Route.extend(AuthenticatedRouteMixin) {}
