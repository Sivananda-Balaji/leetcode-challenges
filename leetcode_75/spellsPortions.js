//2300. Successful Pairs of Spells and Potions

var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const answer = [];
  const m = potions.length;
  const maxPotion = potions.at(-1);

  for (let i = 0; i < spells.length; i++) {
    const minPotion = Math.ceil(success / spells[i]);
    if (minPotion > maxPotion) {
      answer.push(0);
      continue;
    }
    const index = minValue(potions, minPotion);
    answer.push(m - index);
  }

  return answer;
};

const minValue = (potions, minPotion) => {
  let start = 0;
  let end = potions.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (potions[mid] < minPotion) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const spells = [5, 1, 3],
  potions = [1, 2, 3, 4, 5],
  success = 7;

const result = successfulPairs(spells, potions, success);

console.log(result);

/**
 * var successfulPairs = function (spells, potions, success) {
  const result = [];
  for (let i = 0; i < spells.length; i++) {
    count = 0;
    for (let j = 0; j < potions.length; j++) {
      if (spells[i] * potions[j] >= success) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
};
 */
