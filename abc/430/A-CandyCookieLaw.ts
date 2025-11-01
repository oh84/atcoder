import { readFileSync } from 'fs';

function main(input: string): void {
  const [A, B, C, D] = input.trim().split(' ').map(Number);
  console.log(A <= C && B > D ? 'Yes' : 'No');
}

main(readFileSync('/dev/stdin', 'utf8'));
