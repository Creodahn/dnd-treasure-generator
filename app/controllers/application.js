import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  collapsibleOpen: false,
  session: service(),

  actions: {
    logOut() {
      this.session.invalidate();
    },
    toggleCollapsible() {
      const isOpen = this.collapsibleOpen;

      this.set('collapsibleOpen', !isOpen);
    }
  }
});
