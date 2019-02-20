import Controller from '@ember/controller';

export default Controller.extend({
  // attributes
  cr: null,
  // actions
  actions: {
    selectCR() {
      const rand = Math.floor(Math.random() * 1000);

      this.transitionToRoute('main.treasure.individual.cr', this.cr, { queryParams: { rand } });
    }
  }
});
