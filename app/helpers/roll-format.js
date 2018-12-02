import { helper } from '@ember/component/helper';

export function rollFormat(params/*, hash*/) {
  return params[0].join(' + ');
}

export default helper(rollFormat);
