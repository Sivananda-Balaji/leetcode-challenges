//2796. Repeat String

String.prototype.replicate = function (times) {
  let answer = "";
  for (let i = 0; i < times; i++) {
    answer += this;
  }
  return answer;
};

const str = "hello",
  times = 2;

const result = str.replicate(times);

console.log(result);
