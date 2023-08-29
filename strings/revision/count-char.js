//Count occurrence of a given character

function countChar(A, k) {
  // Write your code here
  let count = 0;
  for (let val of A) {
    if (val === k) {
      count++;
    }
  }
  return count;
}

const A = "abccdefgaa",
  k = "a";

const result = countChar(A, k);

console.log(result);
