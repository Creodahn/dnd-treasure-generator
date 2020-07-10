import { helper } from '@ember/component/helper';

export function rollFormat(params) {
  return params[0] ? params[0].map((item) => item.result).join(' + ') : '';
}

export default helper(rollFormat);
