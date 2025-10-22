import { readFileSync } from 'fs';

function gcd(a: bigint, b: bigint): bigint {
  while (b !== 0n) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function main(input: string): void {
  const [A, B, C] = input.trim().split(' ').map(BigInt);
  const g = gcd(A, gcd(B, C));
  const answer = (A / g - 1n) + (B / g - 1n) + (C / g - 1n);
  console.log(answer.toString());
}

main(readFileSync('/dev/stdin', 'utf8'));
