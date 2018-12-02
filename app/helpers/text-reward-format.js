import { helper } from '@ember/component/helper';

export function textRewardFormat(params/*, hash*/) {
  const count = params[0],
    text = params[1];
  
  return `${count} ${count === 1 ? text : `${text}s`}`;
}

export default helper(textRewardFormat);
