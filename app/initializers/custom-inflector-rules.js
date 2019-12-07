import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;
  
  inflector.irregular('bag of holding', 'bags of holding');
  // this rule is because mirage is stupid, apparently
  // it simply can't understand that when i request `dice`
  // then that's the type i want back
  inflector.irregular('die', 'dies');
  inflector.irregular('die', 'dice');
  inflector.irregular('potion of climbing', 'potions of climbing');
  inflector.irregular('potion of greater healing', 'potions of greater healing');
}

export default {
  before: 'ember-cli-mirage',
  initialize,
  name: 'custom-inflector-rules'
};
