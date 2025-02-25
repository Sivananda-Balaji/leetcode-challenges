//1524. Number of Sub-arrays With Odd Sum

var numOfSubarrays = function (arr) {
  let odd = 0,
    even = 1,
    sum = 0,
    result = 0;
  const MOD = 1e9 + 7;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    sum += val;
    if (sum % 2 === 0) {
      even++;
      result += odd;
    } else if (sum % 2 !== 0) {
      odd++;
      result += even;
    }
    result = result % MOD;
  }
  return result;
};

const arr = [1, 3, 5];

const result = numOfSubarrays(arr);

console.log(result);
