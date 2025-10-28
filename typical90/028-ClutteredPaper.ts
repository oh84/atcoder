import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const N = Number(lines[0]);

  const squares = Array.from({ length: 1001 }, () => Array(1001).fill(0));
  const areas = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    const [lx, ly, rx, ry] = lines[i].split(' ').map(Number);
    squares[ly][lx]++;
    squares[ly][rx]--;
    squares[ry][lx]--;
    squares[ry][rx]++;
  }

  for (let x = 0; x <= 1000; x++) {
    for (let y = 1; y <= 1000; y++) {
      squares[y][x] += squares[y - 1][x];
    }
  }

  for (let y = 0; y <= 1000; y++) {
    for (let x = 1; x <= 1000; x++) {
      squares[y][x] += squares[y][x - 1];
    }
  }

  for (let y = 0; y < 1000; y++) {
    for (let x = 0; x < 1000; x++) {
      if (squares[y][x] > 0) {
        areas[squares[y][x]]++;
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    console.log(areas[i]);
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
