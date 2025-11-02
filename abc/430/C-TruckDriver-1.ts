import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, A, B] = lines[0].split(' ').map(Number);
  const S = lines[1];

  const cumA = Array(N + 1).fill(0);
  const cumB = Array(N + 1).fill(0);
  for (let i = 0; i < N; i++) {
    cumA[i + 1] = cumA[i] + (S[i] === 'a' ? 1 : 0);
    cumB[i + 1] = cumB[i] + (S[i] === 'b' ? 1 : 0);
  }

  let answer = 0;

  for (let l = 1; l <= N; l++) {
    // a の個数が A 個以上となる最小の r を二分探索
    let leftA = l - 1;
    let rightA = N + 1;
    while (rightA - leftA > 1) {
      const mid = Math.floor((leftA + rightA) / 2);
      const count = cumA[mid] - cumA[l - 1];
      if (count >= A) {
        rightA = mid;
      } else {
        leftA = mid;
      }
    }
    const minR = rightA;
    if (minR > N) {
      continue;
    }

    // b の個数が B 個未満となる最大の r を二分探索
    let leftB = l - 1;
    let rightB = N + 1;
    while (rightB - leftB > 1) {
      const mid = Math.floor((leftB + rightB) / 2);
      const count = cumB[mid] - cumB[l - 1];
      if (count < B) {
        leftB = mid;
      } else {
        rightB = mid;
      }
    }
    const maxR = leftB;
    if (maxR < l) {
      continue;
    }

    if (maxR >= minR) {
      answer += maxR - minR + 1;
    }
  }

  console.log(answer);
}

main(readFileSync('/dev/stdin', 'utf8'));
