import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const s = input.trim();
  const mid = (s.length + 1) / 2 - 1;
  console.log(s.slice(0, mid) + s.slice(mid + 1));
}
