//860. Lemonade Change

var lemonadeChange = function (bills) {
  const map = {};
  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (bill === 5) {
      map[bill] ? map[bill]++ : (map[bill] = 1);
    } else if (bill === 10) {
      if (map[5] >= 1) {
        map[5]--;
        map[10] ? map[10]++ : (map[10] = 1);
      } else {
        return false;
      }
    } else {
      if (map[10] >= 1 && map[5] >= 1) {
        map[10]--;
        map[5]--;
      } else if (map[5] >= 3) {
        map[5] -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

const bills = [5, 5, 10, 10, 20];

const result = lemonadeChange(bills);

console.log(result);
