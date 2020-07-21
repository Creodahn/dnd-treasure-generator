import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

@classic
export default class MagicItem extends Model {
  // attributes
  @attr('string')
  dieType;

  @attr('number')
  max;

  @attr('number')
  min;

  @attr('string')
  name;

  @attr('string')
  table;

  // relationships
  @hasMany('magic-item', { async: false, inverse: 'parent' })
  children;

  @belongsTo('die')
  die;

  @belongsTo('magic-item', { inverse: 'children' })
  parent;
}
