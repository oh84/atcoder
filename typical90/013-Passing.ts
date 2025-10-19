import { readFileSync } from 'fs';

class PriorityQueue {
  private heap: { node: number, dist: number }[] = [];

  push(element: { node: number, dist: number }): void {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): { node: number, dist: number } | undefined {
    if (this.isEmpty()) return undefined;
    const result = this.heap[0];
    const last = this.heap.pop()!;
    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].dist >= this.heap[parentIndex].dist) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  private bubbleDown(index: number): void {
    while (true) {
      let minIndex = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].dist < this.heap[minIndex].dist) {
        minIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].dist < this.heap[minIndex].dist) {
        minIndex = rightChildIndex;
      }

      if (minIndex === index) break;
      [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
      index = minIndex;
    }
  }
}

function dijkstra(start: number, n: number, neighbors: { node: number, cost: number }[][]): number[] {
  const dist = Array(n + 1).fill(Infinity);
  dist[start] = 0;

  const pq = new PriorityQueue();
  pq.push({ node: start, dist: 0 });

  while (!pq.isEmpty()) {
    const current = pq.pop()!;

    // if (dist[current.node] < current.dist) continue;

    for (const neighbor of neighbors[current.node]) {
      const newDist = dist[current.node] + neighbor.cost;
      if (dist[neighbor.node] > newDist) {
        dist[neighbor.node] = newDist;
        pq.push({ node: neighbor.node, dist: newDist });
      }
    }
  }

  return dist;
}

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);

  const neighbors: { node: number, cost: number }[][] = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b, c] = lines[i].split(' ').map(Number);
    neighbors[a].push({ node: b, cost: c });
    neighbors[b].push({ node: a, cost: c });
  }

  const dist1 = dijkstra(1, n, neighbors);
  const distN = dijkstra(n, n, neighbors);

  for (let k = 1; k <= n; k++) {
    console.log(dist1[k] + distN[k]);
  }
}

main(readFileSync('/dev/stdin', 'utf8'));
