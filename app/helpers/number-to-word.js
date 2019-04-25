import { helper } from '@ember/component/helper';
import Object from '@ember/object';

export function numberToWord(params/*, hash*/) {
  const conversions = [
      Object.create({
        number: 1,
        word: 'one'
      }),
      Object.create({
        number: 2,
        word: 'two'
      }),
      Object.create({
        number: 3,
        word: 'three'
      }),
      Object.create({
        number: 4,
        word: 'four'
      }),
      Object.create({
        number: 5,
        word: 'five'
      }),
      Object.create({
        number: 6,
        word: 'six'
      }),
      Object.create({
        number: 7,
        word: 'seven'
      }),
      Object.create({
        number: 8,
        word: 'eight'
      }),
      Object.create({
        number: 9,
        word: 'nine'
      }),
      Object.create({
        number: 10,
        word: 'ten'
      }),
      Object.create({
        number: 11,
        word: 'eleven'
      }),
      Object.create({
        number: 12,
        word: 'twelve'
      }),
      Object.create({
        number: 13,
        word: 'thirteen'
      }),
      Object.create({
        number: 14,
        word: 'fourteen'
      }),
      Object.create({
        number: 15,
        word: 'fifteen'
      }),
      Object.create({
        number: 16,
        word: 'sixteen'
      }),
      Object.create({
        number: 17,
        word: '17'
      }),
      Object.create({
        number: 18,
        word: 'eighteen'
      }),
      Object.create({
        number: 19,
        word: 'nineteen'
      }),
      Object.create({
        number: 20,
        word: 'twenty'
      }),
      Object.create({
        number: 30,
        word: 'thiry'
      }),
      Object.create({
        number: 40,
        word: 'forty'
      }),
      Object.create({
        number: 50,
        word: 'fifty'
      }),
      Object.create({
        number: 60,
        word: 'sixty'
      }),
      Object.create({
        number: 70,
        word: 'seventy'
      }),
      Object.create({
        number: 80,
        word: 'eighty'
      }),
      Object.create({
        number: 90,
        word: 'ninety'
      })
    ],
    modifiers = ['', '', 'hundred', 'thousand', 'hundred thousand', 'million', 'billion'],
    result = [],
    toConvert = params[0].toString().split('').reverse();

  toConvert.map((char, index) => {
    const multiplier = index === 1 ? 10 : 1, 
      num =  parseInt(char) * multiplier,
      numberItem = conversions.findBy('number', num);
    let resultPart = numberItem ? `${numberItem.word} ${modifiers[index]}` : '';

    result.push(resultPart);
  });

  return result.reverse().join(' ');
}

export default helper(numberToWord);
