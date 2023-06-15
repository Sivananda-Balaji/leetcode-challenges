//2723. Add Two Promises

var addTwoPromises = async function (promise1, promise2) {
  try {
    const res = (await promise1) + (await promise2);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((res) => {
  console.log(res);
});
