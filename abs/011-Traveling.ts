import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
const n = Number(lines[0]);

let prevT = 0;
let prevX = 0;
let prevY = 0;
let result = 'Yes';

for (let i = 1; i <= n; i++) {
  const [t, x, y] = lines[i].split(' ').map(Number);
  const availableTime = t - prevT;
  const requiredDistance = Math.abs(x - prevX) + Math.abs(y - prevY);

  if (requiredDistance > availableTime) {
    result = 'No';
    break;
  }

  const remainingTime = availableTime - requiredDistance;
  if (remainingTime % 2 !== 0) {
    result = 'No';
    break;
  }

  prevT = t;
  prevX = x;
  prevY = y;
}

console.log(result);
