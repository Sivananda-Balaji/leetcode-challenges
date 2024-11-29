//1652. Defuse the Bomb

var decrypt = function (code, k) {
  const len = code.length;
  const answer = new Array(len).fill(0);
  if (k === 0) {
    return answer;
  }
  for (let i = 0; i < len; i++) {
    if (k > 0) {
      for (let j = i + 1; j < i + k + 1; j++) {
        answer[i] += code[j % len];
      }
    } else {
      for (let j = i - Math.abs(k); j < i; j++) {
        answer[i] += code[(j + len) % len];
      }
    }
  }
  return answer;
};

const code = [2, 4, 9, 3],
  k = -2;

const result = decrypt(code, k);

console.log(result);
