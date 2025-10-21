import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);

  const graph: number[][] = Array.from({ length: N + 1 }, () => []);
  const revGraph: number[][] = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [A, B] = lines[i].split(' ').map(Number);
    graph[A].push(B);
    revGraph[B].push(A);
  }
  // console.log({ graph });

  const visited1 = Array(N + 1).fill(false);
  const order: number[] = [];

  function dfs1(v: number) {
    visited1[v] = true;
    for (const next of graph[v]) {
      if (!visited1[next]) {
        dfs1(next);
      }
    }
    order.push(v);
  }

  for (let i = 1; i <= N; i++) {
    if (!visited1[i]) {
      // console.log({ i });
      dfs1(i);
    }
  }

  // console.log({ order });

  const visited2 = Array(N + 1).fill(false);
  const sccSizes: number[] = [];

  function dfs2(v: number): number {
    visited2[v] = true;
    let count = 1;
    for (const next of revGraph[v]) {
      if (!visited2[next]) {
        count += dfs2(next);
      }
    }
    return count;
  }

  for (let i = N - 1; i >= 0; i--) {
    const v = order[i];
    if (!visited2[v]) {
      const size = dfs2(v);
      sccSizes.push(size);
      // console.log({ v, size });
    }
  }

  let answer = 0;

  for (let size of sccSizes) {
    answer += size * (size - 1) / 2;
  }

  console.log(answer);
}

main(readFileSync('/dev/stdin', 'utf8'));

/*
入力例：
7 6
1 2
2 5
5 4
4 1
2 3
3 6

グラフ：
1 → 2 → 3   7
↑   ↓   ↓
4 ← 5   6
*/
