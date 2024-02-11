//2418. Sort the People

var sortPeople = function (names, heights) {
  const map = {};
  for (let i = 0; i < names.length; i++) {
    map[heights[i]] = names[i];
  }
  heights.sort((a, b) => b - a);
  for (let i = 0; i < names.length; i++) {
    names[i] = map[heights[i]];
  }
  return names;
};

const names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];

const result = sortPeople(names, heights);

console.log(result);
