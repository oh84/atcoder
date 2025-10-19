import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
const n = Number(lines[0]);
const a = lines[1].split(' ').map((x) => Number(x));

const sorted = a.sort((x, y) => y - x);
const score1 = sorted.reduce((acc, value, i) => i % 2 === 0 ? acc + value : acc, 0);
const score2 = sorted.reduce((acc, value, i) => i % 2 !== 0 ? acc + value : acc, 0);

console.log(score1 - score2);
