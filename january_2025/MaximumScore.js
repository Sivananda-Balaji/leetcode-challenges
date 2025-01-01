//1422. Maximum Score After Splitting a String

var maxScore = function (s) {
  let left = 0,
    right = 0,
    answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      right++;
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      left++;
    } else if (s[i] === "1") {
      right--;
    }
    const temp = left + right;
    answer = Math.max(answer, temp);
  }
  return answer;
};

const s = "011101";

const result = maxScore(s);

console.log(result);

/**
 * var maxScore = function (s) {
  let answer = 0;
  let min = 0,
    max = s.length;
  for (let i = 1; i < s.length; i++) {
    const left = s.slice(min, i);
    const right = s.slice(i, max);
    let temp = 0;
    for (let j = 0; j < left.length; j++) {
      if (left[j] === "0") {
        temp++;
      }
    }
    for (let k = 0; k < right.length; k++) {
      if (right[k] === "1") {
        temp++;
      }
    }
    answer = Math.max(answer, temp);
  }
  return answer;
};
 */
