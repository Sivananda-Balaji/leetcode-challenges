//657. Robot Return to Origin

var judgeCircle = function (moves) {
  let start = 0;
  let end = 0;
  const commands = { U: 1, D: -1, L: 1, R: -1 };
  for (let i = 0; i < moves.length; i++) {
    const val = moves[i];
    if (val === "U" || val === "D") {
      start += commands[val];
    } else {
      end += commands[val];
    }
  }
  return start === 0 && end === 0;
};

const moves = "LDRRLRUULR";

const result = judgeCircle(moves);

console.log(result);
