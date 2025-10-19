import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const [n, ...d] = input.trim().split('\n').map(Number);

console.log(new Set(d).size);
