//1071. Greatest Common Divisor of Strings

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  return str1.slice(0, gcd(str1.length, str2.length));
};

const str1 = "ABCABC",
  str2 = "ABC";

const result = gcdOfStrings(str1, str2);

console.log(result);
