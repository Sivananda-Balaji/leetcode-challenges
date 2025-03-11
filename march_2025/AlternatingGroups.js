// 3208. Alternating Groups II

var numberOfAlternatingGroups = function (colors, k) {
  const n = colors.length;
  const extendedColors = [...colors, ...colors.slice(0, k - 1)]; // Extend the array

  let count = 0;

  for (let i = 0; i < n; i++) {
    let isValid = true;
    for (let j = i; j < i + k - 1; j++) {
      if (extendedColors[j] === extendedColors[j + 1]) {
        isValid = false;
        break;
      }
    }
    if (isValid) count++;
  }

  return count;
};

const colors = [1, 1, 0, 1];
k = 4;

const result = numberOfAlternatingGroups(colors, k);

console.log(result);
