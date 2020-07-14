import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';

@classic
export default class IndexController extends Controller {
  @service
  currentUser;

  @alias('currentUser.profile')
  profile;
}
