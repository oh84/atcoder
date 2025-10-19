import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const s = input.trim();

const words = ['dream', 'dreamer', 'erase', 'eraser'];

const reversedS = s.split('').reverse().join('');
const reversedWords = words.map((word) => word.split('').reverse().join(''));

let result = 'YES';
let i = 0;
while (i < s.length) {
  const j = i;
  for (const word of reversedWords) {
    if (reversedS.slice(i, i + word.length) === word) {
      i += word.length;
    }
  }
  if (j === i) {
    result = 'NO';
    break;
  }
}

console.log(result);
