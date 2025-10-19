import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const t = Number(lines[0]);

  for (let i = 1; i <= t; i++) {
    const n = Number(lines[i * 2 - 1]);
    const s = lines[i * 2];

    const count = { '0': 0, '1': 0 };
    const maxLen = { '0': 0, '1': 0 };

    let j = 0;

    while (j < n) {
      let k = j + 1;

      while (k < n && s[j] === s[k]) {
        k++;
      }

      const c = s[j];
      const len = k - j;
      count[c] += len;
      maxLen[c] = Math.max(maxLen[c], len);

      j = k;
    }

    const answer = Math.min(
      (count['0'] - maxLen['0']) * 2 + count['1'],
      (count['1'] - maxLen['1']) * 2 + count['0'],
    )

    console.log(answer);
  }
}
