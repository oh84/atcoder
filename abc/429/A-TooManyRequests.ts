import { readFileSync } from 'fs';

function main(input: string): void {
  const [N, M] = input.trim().split(' ').map(Number);

  for (let i = 1; i <= N; i++) {
    console.log(i <= M ? 'OK' : 'Too Many Requests');
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
