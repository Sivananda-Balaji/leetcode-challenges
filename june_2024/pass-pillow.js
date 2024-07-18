//2582. Pass the Pillow

var passThePillow = function (n, time) {
  let answer = 0;
  let indicate = false;
  for (let i = 0; i <= time; i++) {
    if (answer < n && !indicate) {
      answer++;
      if (answer === n) {
        indicate = true;
      }
    } else if (answer <= n && indicate) {
      answer--;
      if (answer === 1) {
        indicate = false;
      }
    }
  }
  return answer;
};

const n = 18,
  time = 38;

const result = passThePillow(n, time);

console.log(result);
