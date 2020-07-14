import classic from 'ember-classic-decorator';
import Controller from '@ember/controller';
import Object, { computed }  from '@ember/object';

@classic
export default class CoinConversionsController extends Controller {
  @computed('model.[]')
  get coinTableValues() {
    const coins = this.model,
      values = coins.map((coin, index) => {
        return coins.map((coin2, index2) => {
          return Object.create({
            id: `${index}${index2}`.toString(),
            firstCoin: coin.name,
            rate: 1 / (coin.value / coin2.value),
            secondCoin: coin2.name
          });
        }).filter((item) => item.rate > 1);
      });

    return values;
  }
}
