const a = 3;
const b = 10;

console.log(a % b);
console.log(Math.floor(Math.random() * 100));

const arr = [12, 15, 20, 25, 59, 79];

console.log(arr.reduce((acc, value) => value + acc, 0));

function fibonachi(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonachi(n - 1) + fibonachi(n - 2);
}

function getRow(n) {
  const arr = [];
  let count = 0;
  let r = 0;

  while (n >= r) {
    arr.push(r);
    r = fibonachi(count++);
  }

  arr.shift();
  return arr;
}

console.table(getRow(88));
