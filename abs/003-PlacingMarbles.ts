import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const ans = input.trim().split('').reduce((acc, s) => acc + Number(s), 0);

console.log(ans);
