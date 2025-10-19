import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [n, k] = lines[0].split(' ').map(Number);
  const s = lines[1];

  let result = '';
  let currentPos = 0;

  for (let i = 0; i < k; i++) {
    const remaining = k - i;
    const searchEnd = n - remaining + 1;
    let minChar = '{'; // 'z' より大きい文字
    let minCharPos = currentPos;

    for (let j = currentPos; j < searchEnd; j++) {
      if (minChar > s[j]) {
        minChar = s[j];
        minCharPos = j;
      }
    }

    result += minChar;
    currentPos = minCharPos + 1;
  }

  console.log(result);
}
