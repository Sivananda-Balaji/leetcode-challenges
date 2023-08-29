//Remove Duplicate Characters

function unique(A) {
  // Write your code here
  let newStr = "";
  for (let i = 0; i < A.length; i++) {
    if (!newStr.includes(A[i])) {
      newStr += A[i];
    }
  }
  return newStr;
}

const A = "abcdabd";

const result = unique(A);

console.log(result);
