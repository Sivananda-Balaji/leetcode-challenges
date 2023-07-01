//374. Guess Number Higher or Lower

var guessNumber = function (n) {
  let start = 0;
  let end = n;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    const val = guess(mid);
    if (val === 0) {
      return mid;
    }
    if (val === -1) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

const guess = (num) => {
  const pick = 6;
  if (num > pick) {
    return -1;
  } else if (num < pick) {
    return 1;
  } else {
    return 0;
  }
};

const result = guessNumber(10);

console.log(result);
