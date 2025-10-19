import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const [a, b] = input.trim().split(' ').map((x) => Number(x));

console.log(a * b % 2 === 0 ? 'Even' : 'Odd');
