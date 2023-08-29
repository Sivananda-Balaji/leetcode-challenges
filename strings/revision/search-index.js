//Search Pattern

function search(A, B) {
  // Write your code here
  const strLen = A.length;
  const PatternLen = B.length;
  const answer = [];
  const lps = buildLPS(B);

  let i = 0;
  let j = 0;
  while (i < strLen) {
    if (A[i] === B[j]) {
      i++;
      j++;
    }
    if (j === PatternLen) {
      answer.push(i - PatternLen + 1);
      j = 0;
    } else if (i < strLen && A[i] !== B[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return answer.length > 0 ? answer : -1;
}

const buildLPS = (pattern) => {
  const result = [0];
  let len = 0;
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      result[i] = len;
      i++;
    } else if (pattern[i] !== pattern[len]) {
      if (len === 0) {
        result[i] = 0;
        i++;
      } else {
        len = result[len - 1];
      }
    }
  }
  return result;
};

const A = "batmanandrobinarebat",
  B = "bat";

const result = search(A, B);

console.log(result);

/**
 * function search(A, B) {
  // Write your code here
  const strLen = A.length;
  const PatternLen = B.length;

  const answer = [];
  for (let i = 0; i <= strLen - PatternLen; i++) {
    let index = 0;
    while (index < PatternLen) {
      if (A[i + index] !== B[index]) {
        break;
      }
      index++;
    }
    if (index === PatternLen) {
      answer.push(i + 1);
    }
  }
  return answer.length > 0 ? answer : -1;
}
 */
