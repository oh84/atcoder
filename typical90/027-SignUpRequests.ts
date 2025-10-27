import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const N = Number(lines[0]);

  const names = new Set();

  for (let i = 1; i <= N; i++) {
    const S = lines[i];
    if (!names.has(S)) {
      names.add(S);
      console.log(i);
    }
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
