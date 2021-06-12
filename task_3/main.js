//Task 1

const obj = {
  js: ['I', 'Angular', 'nodeJS'],
  php: 'love',
  css: 'world',
};

console.log(Object.values(obj).flat().sort().slice(1, 4).join(' '));

//Task 2
const obj2 = {
  q: null,
  w: null,
  e: null,
  r: null,
  t: null,
  y: null,
};

console.log(Object.keys(obj2).join(''));

console.log(
  Object.entries(obj2)
    .map((value) => {
      return value[0];
    })
    .join('')
);

let str = '';
for (const [key] of Object.entries(obj2)) {
  str += `${key}`;
}

console.log(str);

//Task 3

const obj3 = {
  Monday: 1,
  Tuesday: 5,
  Wednesday: 8,
  Thursday: 2,
  Friday: 3,
};

const arr1 = Object.keys(obj3);
const arr2 = Object.values(obj3);

console.log(arr2.reduce((acc, value) => acc + value));

//Task 4

function compareObject(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

console.log(compareObject({ t: 1 }, { t: 1 }));
console.log(compareObject({ t: 1 }, { t: 2 }));
