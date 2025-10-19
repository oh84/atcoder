import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);

const numSet = new Set();
for (let i = 1; i <= n; i++) {
  numSet.add(i);
}

let exists = true;
for (let i = 0; i < n; i++) {
  if (a[i] !== -1) {
    if (!numSet.has(a[i])) {
      exists = false;
      break;
    }
    numSet.delete(a[i]);
  }
}

if (exists) {
  console.log('Yes');
  const nums = Array.from(numSet);
  for (let i = 0; i < n; i++) {
    if (a[i] === -1) {
      a[i] = Number(nums.pop());
    }
  }
  console.log(a.join(' '));
} else {
  console.log('No');
}
