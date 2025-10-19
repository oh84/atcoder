import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const s = input.trim();

const words = ['dream', 'dreamer', 'erase', 'eraser'];

const dp = Array(s.length + 1).fill(false);
dp[0] = true;

for (let i = 1; i <= s.length; i++) {
  for (const word of words) {
    if (i - word.length >= 0 && dp[i - word.length] && s.slice(i - word.length, i) === word) {
      dp[i] = true;
    }
  }
}

console.log(dp[s.length] ? 'YES' : 'NO');
