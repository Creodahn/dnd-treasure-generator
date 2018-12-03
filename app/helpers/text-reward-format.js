import { helper } from '@ember/component/helper';
import Ember from 'ember';

export function textRewardFormat(params/*, hash*/) {
  const count = params[0],
    text = params[1];
  let output = '';

  if(count === 1) {
    output = text;
  } else {
    output = Ember.Inflector.inflector.pluralize(text);
  }

  return output;
}

export default helper(textRewardFormat);
