//First non-repeating character

function firstNonRepeatedCharacter(A) {
  // Write your code here
  const map = {};
  for (let val of A) {
    map[val] ? map[val]++ : (map[val] = 1);
  }
  let index = Infinity;
  for (let i in map) {
    if (map[i] === 1 && A.indexOf(i) < index) {
      index = A.indexOf(i);
    }
  }
  return A[index];
}

const A = "teeter";

const result = firstNonRepeatedCharacter(A);

console.log(result);
