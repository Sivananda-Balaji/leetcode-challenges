//1323. Maximum 69 Number

var maximum69Number = function (num) {
  const numStr = String(num);
  let result = "",
    isChanged = false;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "6" && !isChanged) {
      result += "9";
      isChanged = true;
      continue;
    }
    result += numStr[i];
  }
  return Number(result);
};

const num = 9669;

const result = maximum69Number(num);

console.log(result);
