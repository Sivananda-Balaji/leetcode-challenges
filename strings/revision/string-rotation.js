//String Rotation

function rotateString(A, B) {
  // Write your code here
  if (A.length !== B.length) {
    return false;
  }
  const AA = A + A;
  return AA.includes(B);
}

const A = "abcde",
  B = "cdeab";

const result = rotateString(A, B);

console.log(result);

/**
 * function rotateString(A, B) {
  // Write your code here
  if (A.length !== B.length) {
    return false;
  }
  for (let i = 0; i < A.length; i++) {
    const letter = A.slice(0, i + 1);
    const remain = A.slice(i + 1);
    if (remain + letter === B) {
      return true;
    }
  }
  return false;
}
 */
