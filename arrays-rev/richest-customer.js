//1672. Richest Customer Wealth

var maximumWealth = function (accounts) {
  let answer = 0;
  for (let i = 0; i < accounts.length; i++) {
    const temp = accounts[i].reduce((acc, curr) => acc + curr, 0);
    answer = Math.max(answer, temp);
  }
  return answer;
};

const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

const result = maximumWealth(accounts);

console.log(result);
