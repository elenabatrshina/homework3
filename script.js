const getPromise1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000);
    }, 2000);
  });

const getPromise2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(2000);
    }, 1000);
  });

const all = (promise1, promise2) =>
  new Promise((resolve) => {
    let counter = 0,
      arr = [];
    const handlePromiseResult = (data, i) => {
      counter++;
      arr[i] = data;
      if (counter === 2) {
        resolve(arr);
      }
    };
    promise1.then((data1) => {
      handlePromiseResult(data1, 0);
    });
    promise2.then((data2) => {
      handlePromiseResult(data2, 1);
    });
  });

all(getPromise1(), getPromise2()).then((arr) => console.log(arr));
