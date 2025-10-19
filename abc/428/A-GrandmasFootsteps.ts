import { readFileSync } from 'fs';

function main(input: string): void {
  const [S, A, B, X] = input.trim().split(' ').map(Number);
  let dist = 0;
  let t = 0;
  while (t < X) {
    dist += S * (A < X - t ? A : X - t);
    t += A + B;
  }
  console.log(dist);
}

main(readFileSync('/dev/stdin', 'utf8'));
