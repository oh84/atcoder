import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const N = Number(lines[0]);

  const graph: number[][] = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i < N; i++) {
    const [A, B] = lines[i].split(' ').map(Number);
    graph[A].push(B);
    graph[B].push(A);
  }

  const colors: number[] = Array(N + 1).fill(-1);
  const nodes0: number[] = [];
  const nodes1: number[] = [];

  function bfs(start: number, color: number): void {
    const queue: number[] = [];
    let head = 0;

    queue.push(start);
    colors[1] = color;

    while (head < queue.length) {
      const current = queue[head];
      head++;

      if (colors[current] === 0) {
        nodes0.push(current);
      } else {
        nodes1.push(current);
      }

      for (const next of graph[current]) {
        if (colors[next] === -1) {
          colors[next] = 1 - colors[current];
          queue.push(next);
        }
      }
    }
  }

  bfs(1, 0);

  if (nodes0.length > nodes1.length) {
    console.log(nodes0.slice(0, N / 2).join(' '));
  } else {
    console.log(nodes1.slice(0, N / 2).join(' '));
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
