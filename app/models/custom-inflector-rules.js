import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

// Tell the inflector that the plural of "die" is "dice"
inflector.irregular('die', 'dice');

// Modules must have an export, so we just export an empty object here
export default {};