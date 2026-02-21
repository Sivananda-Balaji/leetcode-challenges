//762. Prime Number of Set Bits in Binary Representation

var countPrimeSetBits = function (left, right) {
  let count = 0;
  const isPrime = (value) => {
    if (value <= 1) {
      return false;
    }
    for (let k = 2; k < value; k++) {
      if (value % k === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = left; i <= right; i++) {
    let binVal = "";
    let val = i;
    while (val !== 0) {
      binVal += val % 2;
      val = Math.floor(val / 2);
    }
    let countBits = 0;
    for (let j = 0; j < binVal.length; j++) {
      binVal[j] === "1" && countBits++;
    }
    if (isPrime(countBits)) {
      count++;
    }
  }
  return count;
};

const left = 6,
  right = 10;

const result = countPrimeSetBits(left, right);

console.log(result);
