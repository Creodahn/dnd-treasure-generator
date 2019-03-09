import DS from 'ember-data';

export default DS.Model.extend({
  charisma: DS.attr('number'),
  constitution: DS.attr('number'),
  dexterity: DS.attr('number'),
  intelligence: DS.attr('number'),
  name: DS.attr('string'),
  names: DS.attr(),
  raceNameDescription: DS.attr('string'),
  shortDescription: DS.attr('string'),
  size: DS.attr('string'),
  sourceBook: DS.attr('string'),
  speed: DS.attr('number'),
  strength: DS.attr('number'),
  traits: DS.attr(),
  wisdom: DS.attr('number')
});
