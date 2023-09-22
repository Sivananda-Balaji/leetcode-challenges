//860. Lemonade Change

var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
    } else if (bills[i] === 10) {
      if (five === 0) {
        return false;
      }
      five--;
      ten++;
    } else {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

const bills = [5, 5, 5, 10, 20];

const result = lemonadeChange(bills);

console.log(result);
