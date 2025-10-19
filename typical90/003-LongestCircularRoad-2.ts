import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);

  const graph: number[][] = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i < n; i++) {
    const [a, b] = lines[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(start: number): [number, number] {
    let farthest = start;
    let maxDistance = 0;

    const distances = Array(n + 1).fill(-1);

    function explore(v: number, d: number): void {
      distances[v] = d;

      if (maxDistance < d) {
        farthest = v;
        maxDistance = d;
      }

      for (const adjacent of graph[v]) {
        if (distances[adjacent] === -1) {
          explore(adjacent, d + 1);
        }
      }
    }

    explore(start, 0);
    return [farthest, maxDistance];
  }

  const [farthest,] = dfs(1);
  const [, diameter] = dfs(farthest);

  console.log(diameter + 1);
}
