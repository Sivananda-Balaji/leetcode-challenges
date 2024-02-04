//1773. Count Items Matching a Rule

var countMatches = function (items, ruleKey, ruleValue) {
  let answer = 0;
  const index = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) {
      answer++;
    }
  }
  return answer;
};

const items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  ruleKey = "color",
  ruleValue = "silver";

const result = countMatches(items, ruleKey, ruleValue);

console.log(result);
