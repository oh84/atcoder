import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const T = Number(lines[0]);
  const [L, X, Y] = lines[1].split(' ').map(Number);
  const Q = Number(lines[2]);

  for (let i = 0; i < Q; i++) {
    const E = Number(lines[3 + i]);

    const theta = 2 * Math.PI * E / T;
    const z = L / 2 - L / 2 * Math.cos(theta);
    const y = - L / 2 * Math.sin(theta);
    const d = Math.sqrt(X ** 2 + (Y - y) ** 2);
    const angleRad = Math.atan(z / d);
    const angle = angleRad * 180 / Math.PI;

    console.log(angle);
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
