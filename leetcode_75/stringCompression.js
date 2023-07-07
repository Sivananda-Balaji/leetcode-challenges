//443. String Compression

var compress = function (chars) {
  let count = 1;
  let index = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else if (count === 1) {
      chars[index++] = chars[i];
    } else {
      chars[index++] = chars[i];
      const countStr = count.toString();

      for (let j = 0; j < countStr.length; j++) {
        chars[index++] = countStr[j];
      }
      count = 1;
    }
  }
  return index;
};

const result = compress(["a", "a", "b", "b", "c", "c", "c"]);

console.log(result);
