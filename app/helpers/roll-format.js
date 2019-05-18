import { helper } from '@ember/component/helper';

export function rollFormat(params) {
  return params[0].join(' + ');
}

export default helper(rollFormat);
