import { helper } from '@ember/component/helper';

export function textFormat([text, formatting]) {
  let formattedText = '';

  switch(formatting) {
    case 'capitalize':
      formattedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      break;
    case 'lower':
      formattedText = text.toLowerCase();
      break;
    case 'upper':
      formattedText = text.toUpperCase();
      break;
    default:
      formattedText = text;
  }

  return formattedText;
}

export default helper(textFormat);
