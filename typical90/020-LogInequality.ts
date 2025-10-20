import { readFileSync } from 'fs';

function main(input: string): void {
  const [a, b, c] = input.trim().split(' ').map(BigInt); // Number型ではWA
  console.log(a < c ** b ? 'Yes' : 'No');
}

main(readFileSync('/dev/stdin', 'utf8'));
