import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;
  
  inflector.irregular('bag of holding', 'bags of holding');
  inflector.irregular('die', 'dice');
  inflector.irregular('potion of climbing', 'potions of climbing');
  inflector.irregular('potion of greater healing', 'potions of greater healing');
}

export default {
  initialize
};
