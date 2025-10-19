import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const Q = Number(lines[0]);

  const counts = [0];
  const minCounts = [0];

  for (let i = 1; i <= Q; i++) {
    const query = lines[i];

    if (query[0] === '1') {
      const [, c] = query.split(' ');

      const count = counts.at(-1)! + (c === '(' ? 1 : -1);
      const minCount = Math.min(minCounts.at(-1)!, count);

      counts.push(count);
      minCounts.push(minCount);
    } else {
      counts.pop();
      minCounts.pop();
    }

    if (counts.at(-1) === 0 && minCounts.at(-1) === 0) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
