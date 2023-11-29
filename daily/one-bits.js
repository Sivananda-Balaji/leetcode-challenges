//191. Number of 1 Bits

var hammingWeight = function (n) {
  const nStr = n.toString(2);
  let count = 0;
  for (let i = 0; i < nStr.length; i++) {
    if (nStr[i] !== "0") {
      count++;
    }
  }
  return count;
};

const n = "00000000000000000000000000001011";

const result = hammingWeight(n);

console.log(result);
