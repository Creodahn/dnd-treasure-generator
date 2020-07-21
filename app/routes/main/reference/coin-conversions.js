import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class CoinConversionsRoute extends Route {
  model() {
    const coins = this.store.peekAll('coin');

    return coins.length > 0 ? coins : this.store.findAll('coin');
  }
}
