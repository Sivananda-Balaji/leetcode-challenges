//2418. Sort the People

var sortPeople = function (names, heights) {
  const map = {};
  for (let i = 0; i < names.length; i++) {
    map[heights[i]] = names[i];
  }
  const answer = Object.entries(map).sort((a, b) => b[0] - a[0]);
  return answer.map((item) => item[1]);
};

const names = ["Alice", "Bob", "Bob"],
  heights = [155, 185, 150];

const result = sortPeople(names, heights);

console.log(result);
