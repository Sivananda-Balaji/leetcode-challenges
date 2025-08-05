//3477. Fruits Into Baskets II

var numOfUnplacedFruits = function (fruits, baskets) {
  let count = 0;
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    let unset = 1;
    for (let j = 0; j < baskets.length; j++) {
      if (fruit <= baskets[j]) {
        baskets[j] = 0;
        unset = 0;
        break;
      }
    }
    count += unset;
  }
  return count;
};

const fruits = [8, 5],
  baskets = [1, 8];

const result = numOfUnplacedFruits(fruits, baskets);

console.log(result);
