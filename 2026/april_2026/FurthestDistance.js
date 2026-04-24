//2833. Furthest Point From Origin

var furthestDistanceFromOrigin = function (moves) {
  const map = {};
  for (let i = 0; i < moves.length; i++) {
    const val = moves[i];
    map[val] = (map[val] || 0) + 1;
  }
  const lValue = map["L"] || 0;
  const rValue = map["R"] || 0;
  const _Value = map["_"] || 0;
  return Math.max(lValue + _Value - rValue, rValue + _Value - lValue);
};

const moves = "_______";

const result = furthestDistanceFromOrigin(moves);

console.log(result);
