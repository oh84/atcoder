import { readFileSync } from 'fs';

class UnionFind {
  parents: number[];
  ranks: number[];

  constructor(n: number) {
    this.parents = Array.from({ length: n }, (_, i) => i);
    this.ranks = Array(n).fill(0);
  }

  union(x: number, y: number): void {
    const rootX = this.findRoot(x);
    const rootY = this.findRoot(y);

    if (rootX === rootY) return;

    if (this.ranks[rootX] < this.ranks[rootY]) {
      this.parents[rootX] = rootY;
    } else if (this.ranks[rootX] > this.ranks[rootY]) {
      this.parents[rootY] = rootX;
    } else {
      this.parents[rootY] = rootX;
      this.ranks[rootX]++;
    }
  }

  isSame(x: number, y: number): boolean {
    return this.findRoot(x) === this.findRoot(y);
  }

  findRoot(x: number): number {
    if (this.parents[x] !== x) {
      this.parents[x] = this.findRoot(this.parents[x]);
    }
    return this.parents[x];
  }
}

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [h, w] = lines[0].split(' ').map(Number);
  const q = Number(lines[1]);

  const uf = new UnionFind(h * w);
  const painted = Array(h * w).fill(false);
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  function toIndex(r: number, c: number): number {
    return (r - 1) * w + (c - 1);
  }

  for (let i = 1; i <= q; i++) {
    const [t, ...others] = lines[1 + i].split(' ').map(Number);

    if (t === 1) {
      const [r, c] = others;
      const idx = toIndex(r, c);
      painted[idx] = true;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        const nidx = toIndex(nr, nc);
        if (1 <= nr && nr <= h && 1 <= nc && nc <= w && painted[nidx]) {
          uf.union(idx, nidx);
        }
      }

    } else if (t === 2) {
      const [ra, ca, rb, cb] = others;
      const idxA = toIndex(ra, ca);
      const idxB = toIndex(rb, cb);

      if (painted[idxA] && painted[idxB] && uf.isSame(idxA, idxB)) {
        console.log('Yes');
      } else {
        console.log('No');
      }
    }
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
