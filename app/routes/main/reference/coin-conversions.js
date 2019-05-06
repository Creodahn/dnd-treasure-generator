import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const coins = this.store.peekAll('coin');

    return coins.length > 0 ? coins : this.store.findAll('coin');
  }
});
