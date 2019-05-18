import { association, Model } from 'ember-cli-mirage';

export default Model.extend({
  coin: association(),
  treasure_rule_set: association()
});
