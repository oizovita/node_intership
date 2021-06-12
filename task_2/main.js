// Task 1
const str = 'aaa @ bbb @ ccc';

console.log(str.replace(/@/g, '!'));

//Task 2
function strToArr(string) {
  return string.split('');
}

console.log(strToArr('test'));

// Task 3
console.log('I-know-javascript!'.replace(/[\w\-]/g, '!'));

//Task 4
console.log(
  ['i', 'know', 'javascript', '!']
    .map((value, index) => {
      return index === 0 ? value.toUpperCase() : value;
    })
    .join(' ')
);

// Task 5
function checkPalindrome(string = '') {
  return string === string.split('').reverse().join('');
}

console.log(checkPalindrome('tet'));
