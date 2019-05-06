import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import Object from '@ember/object';

export default Controller.extend({
  coinTableValues: computed('model.[]', function() {
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
  })
});
