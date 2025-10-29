import { readFileSync } from 'fs';

class LazySegmentTree {
  private size: number;
  private tree: number[];
  private lazy: number[];

  constructor(size: number) {
    this.size = 1;
    while (this.size < size) {
      this.size *= 2;
    }
    this.tree = Array(2 * this.size - 1).fill(0);
    this.lazy = Array(2 * this.size - 1).fill(0);
  }

  query(left: number, right: number): number {
    return this.querySub(left, right, 0, 0, this.size);
  }

  update(left: number, right: number, value: number): void {
    this.updateSub(left, right, value, 0, 0, this.size);
  }

  private querySub(
    queryLeft: number,
    queryRight: number,
    index: number,
    nodeLeft: number,
    nodeRight: number
  ): number {
    if (nodeRight <= queryLeft || queryRight <= nodeLeft) {
      return 0;
    }

    this.applyLazyUpdate(index);

    if (queryLeft <= nodeLeft && nodeRight <= queryRight) {
      return this.tree[index];
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    const leftValue = this.querySub(queryLeft, queryRight, index * 2 + 1, nodeLeft, mid);
    const rightValue = this.querySub(queryLeft, queryRight, index * 2 + 2, mid, nodeRight);
    return Math.max(leftValue, rightValue);
  }

  private updateSub(
    queryLeft: number,
    queryRight: number,
    value: number,
    index: number,
    nodeLeft: number,
    nodeRight: number
  ): void {
    if (nodeRight <= queryLeft || queryRight <= nodeLeft) {
      return;
    }

    if (queryLeft <= nodeLeft && nodeRight <= queryRight) {
      this.lazy[index] = value;
      this.applyLazyUpdate(index);
      return;
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    this.updateSub(queryLeft, queryRight, value, index * 2 + 1, nodeLeft, mid);
    this.updateSub(queryLeft, queryRight, value, index * 2 + 2, mid, nodeRight);
    this.tree[index] = Math.max(this.tree[index * 2 + 1], this.tree[index * 2 + 2]);
  }

  private applyLazyUpdate(index: number): void {
    if (this.lazy[index] === 0) {
      return;
    }

    this.tree[index] = this.lazy[index];

    if (index < this.size - 1) {
      this.lazy[index * 2 + 1] = this.lazy[index];
      this.lazy[index * 2 + 2] = this.lazy[index];
    }

    this.lazy[index] = 0;
  }
}

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [W, N] = lines[0].split(' ').map(Number);

  const seg = new LazySegmentTree(W + 1);

  for (let i = 1; i <= N; i++) {
    const [L, R] = lines[i].split(' ').map(Number);
    const maxHeight = seg.query(L - 1, R);
    const newHeight = maxHeight + 1;
    seg.update(L - 1, R, newHeight);
    console.log(newHeight);
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
