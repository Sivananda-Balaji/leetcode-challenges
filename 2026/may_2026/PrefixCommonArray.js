//2657. Find the Prefix Common Array of Two Arrays

var findThePrefixCommonArray = function (A, B) {
  const C = [],
    map = {};
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    const valA = A[i],
      valB = B[i];
    if (map[valA] !== undefined) {
      map[valA]++;
    } else {
      map[valA] = 1;
    }
    if (map[valB] !== undefined) {
      map[valB]++;
    } else {
      map[valB] = 1;
    }
    if (valA === valB) {
      ans++;
    } else {
      if (map[valA] === 2) {
        ans++;
      }
      if (map[valB] === 2) {
        ans++;
      }
    }

    C.push(ans);
  }
  return C;
};

const A = [1, 3, 2, 4],
  B = [3, 1, 2, 4];

const result = findThePrefixCommonArray(A, B);

console.log(result);
