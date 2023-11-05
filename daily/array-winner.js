//1535. Find the Winner of an Array Game

var getWinner = function (arr, k) {
  const max = Math.max(...arr);
  let curr = arr.shift();
  let wins = 0;
  while (arr.length !== 0) {
    const first = arr.shift();
    if (curr > first) {
      wins++;
      arr.push(first);
    } else {
      wins = 1;
      arr.push(curr);
      curr = first;
    }
    if (wins === k || curr === max) {
      return curr;
    }
  }
};

const arr = [2, 1, 3, 5, 4, 6, 7],
  k = 2;

const result = getWinner(arr, k);

console.log(result);
