//739. Daily Temperatures

var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  if (len < 2) {
    return [0];
  }
  const answer = new Array(len).fill(0);
  for (let i = len - 2; i >= 0; i--) {
    let j = i + 1;
    if (temperatures[j] > temperatures[i]) {
      answer[i] = j - i;
    } else {
      while (temperatures[j] <= temperatures[i] && answer[j] > 0) {
        j += answer[j];
      }
      answer[i] = j < len && temperatures[j] > temperatures[i] ? j - i : 0;
    }
  }
  return answer;
};

const temperatures = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78];

const result = dailyTemperatures(temperatures);

console.log(result);
