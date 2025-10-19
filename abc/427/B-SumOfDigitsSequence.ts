import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const n = Number(input.trim());

  let answer = 1;
  for (let i = 1; i < n; i++) {
    answer += f(answer);
  }
  console.log(answer);
}

function f(num: number): number {
  let result = 0;
  while (num > 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
