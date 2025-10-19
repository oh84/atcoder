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
    distances[start] = 0;

    const stack = [start];

    while (stack.length > 0) {
      const current = stack.pop()!;

      if (maxDistance < distances[current]) {
        farthest = current;
        maxDistance = distances[current];
      }

      for (const adjacent of graph[current]) {
        if (distances[adjacent] === -1) {
          distances[adjacent] = distances[current] + 1;
          stack.push(adjacent);
        }
      }
    }

    return [farthest, maxDistance];
  }

  const [farthest,] = dfs(1);
  const [, diameter] = dfs(farthest);

  console.log(diameter + 1);
}
