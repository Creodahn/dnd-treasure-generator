import { helper } from '@ember/component/helper';
import Inflector from 'ember-inflector';

export function textRewardFormat(params/*, hash*/) {
  const count = params[0],
    text = params[1];
  let output = '';

  if(count === 1) {
    output = text;
  } else {
    output = Inflector.inflector.pluralize(text);
  }

  return output;
}

export default helper(textRewardFormat);
