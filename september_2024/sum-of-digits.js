//1945. Sum of Digits of String After Convert

var getLucky = function (s, k) {
  const values = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let num = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    num += values[char];
  }
  let sum = 0;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < num.length; j++) {
      sum += Number(num[j]);
    }
    num = `${sum}`;
    if (i == k - 1) {
      return sum;
    } else {
      sum = 0;
    }
  }
  return sum;
};

const s = "leetcode",
  k = 2;

const result = getLucky(s, k);

console.log(result);
