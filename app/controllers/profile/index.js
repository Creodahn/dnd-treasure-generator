import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';

export default class IndexController extends Controller {
  @service
  currentUser;

  @alias('currentUser.profile')
  profile;
}
