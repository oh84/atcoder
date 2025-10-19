import { readFileSync } from 'fs';

class BIT {
  private size: number;
  private tree: number[];

  constructor(size: number) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }

  add(index: number, value: number): void {
    while (index <= this.size) {
      this.tree[index] += value;
      index += index & -index;
    }
  }

  sum(index: number): number {
    let result = 0;
    while (index > 0) {
      result += this.tree[index];
      index -= index & -index;
    }
    return result;
  }

  rangeSum(left: number, right: number): number {
    if (left > right) return 0;
    return this.sum(right) - this.sum(left - 1);
  }
}

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);

  const s = [];
  for (let i = 1; i <= m; i++) {
    const [l, r] = lines[i].split(' ').map(Number);
    s.push([l, r]);
  }

  s.sort(([l1, r1], [l2, r2]) => {
    if (l1 !== l2) return l1 - l2;
    return r1 - r2;
  });

  let count = 0;
  const bit = new BIT(n);

  let i = 0;
  while (i < m) {
    const currentL = s[i][0];
    const group = [];

    while (i < m && s[i][0] === currentL) {
      group.push(s[i][1]);
      i++;
    }

    for (const r of group) {
      count += bit.rangeSum(currentL + 1, r - 1);
    }

    for (const r of group) {
      bit.add(r, 1);
    }
  }

  console.log(count);
}

main(readFileSync('/dev/stdin', 'utf8'));
