//1
const users = [
  { gender: 'male', age: 22 },
  { gender: 'female', age: 20 },
  { gender: 'male', age: 32 },
];

const ageSum = users.reduce((acc, val) => {
  acc += val.age;
  return acc;
}, 0);

console.log(Math.floor(ageSum / users.length));

//2

const object = {
  a: 'somestring',
  b: 42,
  c: false,
  k: 11,
};
const numbers = [];

Object.values(object).forEach((item) => {
  if (typeof item === 'number') {
    numbers.push(item);
  }
});

console.log(numbers);
