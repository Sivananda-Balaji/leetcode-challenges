//3075. Maximize Happiness of Selected Children

var maximumHappinessSum = function (happiness, k) {
  let answer = 0;
  happiness.sort((a, b) => a - b);
  for (let i = 1; i <= k; i++) {
    if (happiness.at(-1) > 0) {
      answer += happiness.at(-1);
    }
    happiness.pop();
    happiness[happiness.length - 1] = happiness.at(-1) - i;
  }
  return answer;
};

const happiness = [12, 1, 42];
k = 3;

const result = maximumHappinessSum(happiness, k);

console.log(result);
