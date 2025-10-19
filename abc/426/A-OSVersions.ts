import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const [x, y] = input.trim().split(' ');
  const versions = ['Ocelot', 'Serval', 'Lynx']

  console.log(versions.indexOf(x) >= versions.indexOf(y) ? 'Yes' : 'No');
}
