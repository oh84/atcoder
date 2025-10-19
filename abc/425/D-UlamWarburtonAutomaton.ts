import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const [line0, ...others] = input.trim().split('\n');
const [h, w] = line0.split(' ').map(Number);
const square = others.map((line) => line.split(''));

const offsets = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function inSquare(y: number, x: number) {
  return (0 <= y && y < h) && (0 <= x && x < w);
}

function countBlackNeighbors(y: number, x: number) {
  let count = 0;
  for (const [dy, dx] of offsets) {
    const ny = y + dy;
    const nx = x + dx;
    if (inSquare(ny, nx) && square[ny][nx] === '#') {
      count++;
    }
  }
  return count;
}

let targets: number[][] = [];

for (let i = 1; i <= h * w; i++) {
  if (i === 1) {
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (square[y][x] === '.' && countBlackNeighbors(y, x) === 1) {
          targets.push([y, x]);
        }
      }
    }
  } else {
    const nextTargets: number[][] = [];
    for (const [y, x] of targets) {
      for (const [dy, dx] of offsets) {
        const ny = y + dy;
        const nx = x + dx;
        if (inSquare(ny, nx) && square[ny][nx] === '.' && countBlackNeighbors(ny, nx) === 1) {
          nextTargets.push([ny, nx]);
        }
      }
    }
    targets = nextTargets;
  }

  if (targets.length === 0) {
    break;
  }

  for (const [y, x] of targets) {
    square[y][x] = '#';
  }
}

let count = 0;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (square[y][x] === '#') {
      count++;
    }
  }
}

console.log(count);
