//8. String to Integer (atoi)

var myAtoi = function (s) {
  let i = 0;
  let sign = 1;
  let answer = 0;
  while (s[i] === " ") {
    i++;
  }
  if (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    answer = answer * 10 + (s[i++] - "0");
    if (answer * sign > 2147483647) {
      return 2147483647;
    }

    if (answer * sign < -2147483648) {
      return -2147483648;
    }
  }
  return answer * sign;
};

const s = "   -42";

const result = myAtoi(s);

console.log(result);
