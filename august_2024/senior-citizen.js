//2678. Number of Senior Citizens

var countSeniors = function (details) {
  let answer = 0;
  for (let i = 0; i < details.length; i++) {
    const age = details[i].slice(-4, -2);
    if (age > 60) {
      answer++;
    }
  }
  return answer;
};

const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];

const result = countSeniors(details);

console.log(result);
