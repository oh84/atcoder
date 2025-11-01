import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);

  const grid: string[][] = [];

  for (let i = 1; i <= N; i++) {
    grid.push(lines[i].split(''));
  }

  const subGrids = new Set<string>();

  for (let y = 0; y <= N - M; y++) {
    for (let x = 0; x <= N - M; x++) {
      let subGrid = '';
      for (let dy = 0; dy < M; dy++) {
        for (let dx = 0; dx < M; dx++) {
          subGrid += grid[y + dy][x + dx];
        }
      }
      subGrids.add(subGrid);
    }
  }

  console.log(subGrids.size);
}

main(readFileSync('/dev/stdin', 'utf8'));
