//657. Robot Return to Origin

var judgeCircle = function (moves) {
  const map = {};
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    map[move] !== undefined ? map[move]++ : (map[move] = 1);
  }
  if (map["L"] !== map["R"] || map["U"] !== map["D"]) {
    return false;
  }
  return true;
};

const moves = "LDRRLRUULR";

const result = judgeCircle(moves);

console.log(result);
