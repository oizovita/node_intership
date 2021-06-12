//Task 1
const ar = ['a', 'b', 'c'].concat([1, 2, 3]);

ar.push(111);
console.log(ar);

//Task 2
console.log([1, 2, 3].reverse());

//Task 3
const arr = ['learn', 'css', 'nodejs'];
const newArr = [arr.shift(), arr.pop()];

console.log(newArr);

//Task 4
let unique = [...new Set([1, 2, 3, 4, 5, 6].concat([5, 6, 7, 8, 9]))];

console.log(unique);

//Task 5
const obj = { js: 'test', jq: 'hello', css: 'world' };

console.log(Object.keys(obj));
console.log(Object.values(obj));
