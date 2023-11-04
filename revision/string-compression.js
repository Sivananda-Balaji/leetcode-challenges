//443. String Compression

var compress = function (chars) {
  let index = 0,
    count = 1;
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
  return chars;
};

const chars = ["a", "a", "b", "b", "c", "c", "c"];

const result = compress(chars);

console.log(result);
