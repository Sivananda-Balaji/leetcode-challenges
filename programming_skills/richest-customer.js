//1672. Richest Customer Wealth

var maximumWealth = function (accounts) {
  let answer = -Infinity;
  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((acc, curr) => acc + curr, 0);
    answer = Math.max(sum, answer);
  }
  return answer;
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

const result = maximumWealth(accounts);

console.log(result);
