//1275. Find Winner on a Tic Tac Toe Game

var tictactoe = function (moves) {
  const cases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const grid = [];
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    grid[move[0] * 3 + move[1]] = i % 2 ? "B" : "A";
  }
  for (let win of cases) {
    const user = grid[win[0]];
    if (user && user === grid[win[1]] && user === grid[win[2]]) {
      return user;
    }
  }
  return moves.length === 9 ? "Draw" : "Pending";
};

const moves = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];

const result = tictactoe(moves);

console.log(result);
