//2078. Two Furthest Houses With Different Colors

var maxDistance = function (colors) {
  const len = colors.length;
  let start = 0,
    end = len - 1,
    endIndex = len - 1,
    startIndex = 0;
  while (start < end) {
    if (colors[start] === colors[end]) {
      end--;
      endIndex = end;
    } else {
      break;
    }
  }
  ((start = 0), (end = len - 1));
  while (start < end) {
    if (colors[start] === colors[end]) {
      start++;
      startIndex = start;
    } else {
      break;
    }
  }
  const startDistance = len - 1 - startIndex;
  const endDistance = endIndex - 0;
  return Math.max(startDistance, endDistance);
};

const colors = [0, 1];

const result = maxDistance(colors);

console.log(result);
