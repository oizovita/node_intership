//1

function setNumbers(a, b, c) {
  let promise1 = new Promise(function (resolve, reject) {
    resolve(a + 1);
  });
  let promise2 = new Promise(function (resolve, reject) {
    resolve(b + 1);
  });
  let promise3 = new Promise(function (resolve, reject) {
    resolve(c + 1);
  });

  return Promise.all([promise1, promise2, promise3]);
}

setNumbers(1, 2, 3).then((data) => console.log(data));

// 2

async function callApi() {
  let response;
  try {
    response = await fetch('url/to/api/endpoint');
  } catch (error) {
    return error;
  }

  return response.json();
}

// 3

const foo = new Promise((resolve, reject) => {
  resolve('Promise1');
});

const bar = new Promise((resolve, reject) => {
  resolve('Promise2');
});

console.log(
  'Res',
  Promise.all([foo, bar]).then((data) => console.log(data))
);
