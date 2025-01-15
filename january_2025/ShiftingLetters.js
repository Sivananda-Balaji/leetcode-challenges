//2381. Shifting Letters II

var shiftingLetters = function (s, shifts) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const shiftArr = new Array(s.length).fill(0);
  for (let i = 0; i < shifts.length; i++) {
    const [start, end, value] = shifts[i];
    const direction = value === 1 ? 1 : -1;
    shiftArr[start] += direction;
    if (shiftArr[end + 1] < s.length) {
      shiftArr[end + 1] -= direction;
    }
  }
  for (let i = 1; i < s.length; i++) {
    shiftArr[i] += shiftArr[i - 1];
  }
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let indexValue = (lower.indexOf(s[i]) + shiftArr[i]) % 26;
    if (indexValue < 0) {
      indexValue += 26;
    }
    answer += lower[indexValue];
  }
  return answer;
};

const s = "dztz",
  shifts = [
    [0, 0, 0],
    [1, 1, 1],
  ];

const result = shiftingLetters(s, shifts);

console.log(result);

/**
 * var shiftingLetters = function (s, shifts) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const shift = (start, end, shiftLetter) => {
    let newStr = "";
    for (j = 0; j < s.length; j++) {
      if (j >= start && j <= end) {
        if (shiftLetter === 0) {
          newStr += s[j] === "a" ? "z" : lower[lower.indexOf(s[j]) - 1];
        } else {
          newStr += s[j] === "z" ? "a" : lower[lower.indexOf(s[j]) + 1];
        }
      } else {
        newStr += s[j];
      }
    }
    return newStr;
  };
  for (let i = 0; i < shifts.length; i++) {
    s = shift(shifts[i][0], shifts[i][1], shifts[i][2]);
  }
  return s;
};
 */
