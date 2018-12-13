import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

// Tell the inflector that the plural of "die" is "dice"
inflector.irregular('bag of holding', 'bags of holding');
inflector.irregular('die', 'dice');
inflector.irregular('potion of climbing', 'potions of climbing');
inflector.irregular('potion of greater healing', 'potions of greater healing');

// Modules must have an export, so we just export an empty object here
export default {};