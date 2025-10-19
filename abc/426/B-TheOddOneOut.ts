import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const s = input.trim();
  const c0 = s[0];
  const c1 = s[1];

  if (c0 !== c1) {
    console.log(c0 === s[2] ? c1 : c0);
    return;
  }

  for (let i = 2; i < s.length; i++) {
    if (s[i] !== c0) {
      console.log(s[i]);
      return;
    }
  }
}
