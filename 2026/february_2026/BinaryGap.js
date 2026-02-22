//868. Binary Gap

var binaryGap = function (n) {
  let binValue = "";
  while (n !== 0) {
    binValue += n % 2;
    n = Math.floor(n / 2);
  }
  binValue = binValue.split("").reverse().join("");
  let distance = 0;
  let i = 0;
  while (binValue[i] === "0") {
    i++;
  }
  let count = 0;
  for (let k = i; k < binValue.length; k++) {
    const value = binValue[k];
    if (value === "0") {
      count++;
    } else if (value === "1") {
      distance = Math.max(count, distance);
      count = 1;
    }
  }
  return distance;
};

const n = 22;

const result = binaryGap(n);

console.log(result);
