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

  function bfs(start: number): [number, number] {
    let farthest = start;
    let maxDistance = 0;

    const distances = Array(n + 1).fill(-1);
    distances[start] = 0;

    const queue = [start];
    let index = 0;

    while (index < queue.length) {
      const current = queue[index++];

      if (maxDistance < distances[current]) {
        farthest = current;
        maxDistance = distances[current];
      }

      for (const adjacent of graph[current]) {
        if (distances[adjacent] === -1) {
          distances[adjacent] = distances[current] + 1;
          queue.push(adjacent);
        }
      }
    }

    return [farthest, maxDistance];
  }

  const [farthest,] = bfs(1);
  const [, diameter] = bfs(farthest);

  console.log(diameter + 1);
}
