//67. Add Binary

var addBinary = function (a, b) {
  let lenA = a.length;
  let lenB = b.length;
  if (lenA > lenB) {
    b = b.padStart(lenA, "0");
  } else if (lenB > lenA) {
    a = a.padStart(lenB, "0");
  }
  lenA = a.length;
  lenB = b.length;
  let ans = "",
    carry = 0;
  for (let i = lenA - 1; i >= 0; i--) {
    const valA = a[i];
    const valB = b[i];
    if (valA === "0" && valB === "0") {
      if (carry) {
        ans += "1";
        carry = 0;
      } else {
        ans += "0";
      }
    } else if (valA === "1" && valB === "1") {
      if (carry === 1) {
        ans += "1";
        carry = 1;
      } else {
        ans += "0";
        carry = 1;
      }
    } else if (
      (valA === "1" && valB === "0") ||
      (valA === "0" && valB === "1")
    ) {
      if (carry === 1) {
        ans += "0";
        carry = 1;
      } else {
        ans += "1";
        carry = 0;
      }
    }
  }
  if (carry) {
    ans += "1";
  }
  return ans.split("").reverse().join("");
};

const a = "1111",
  b = "1111";

const result = addBinary(a, b);

console.log(result);
