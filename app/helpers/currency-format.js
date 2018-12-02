import { helper } from '@ember/component/helper';

export function currencyFormat(params) {
  const coinType = params[1],
    total = params[0];

  return `${total} ${coinType}`;
}

export default helper(currencyFormat);
