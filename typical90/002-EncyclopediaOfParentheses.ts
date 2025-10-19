import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const n = Number(input.trim());

  function isValid(s: string): boolean {
    let score = 0;
    for (const c of s) {
      if (c === '(') {
        score++;
      } else if (c === ')') {
        score--;
      }
      if (score < 0) {
        return false;
      }
    }
    return score === 0;
  }

  for (let bit = 0; bit < (1 << n); bit++) {
    let s = '';
    for (let i = n - 1; i >= 0; i--) {
      s += (bit & (1 << i)) ? ')' : '(';
    }
    if (isValid(s)) {
      console.log(s);
    }
  }
}
