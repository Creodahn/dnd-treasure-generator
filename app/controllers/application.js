import Controller from '@ember/controller';

export default Controller.extend({
    collapsibleOpen: false,
    actions: {
      toggleCollapsible() {
        const isOpen = this.collapsibleOpen;

        this.set('collapsibleOpen', !isOpen);
      }
    }
});
