import classic from 'ember-classic-decorator';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

@classic
export default class ApplicationController extends Controller {
  collapsibleOpen = false;

  @service
  session;

  @action
  logOut() {
    this.session.invalidate();
  }

  @action
  toggleCollapsible() {
    const isOpen = this.collapsibleOpen;

    this.set('collapsibleOpen', !isOpen);
  }
}
