//2418. Sort the People

var sortPeople = function (names, heights) {
  const pairs = names.map((name, index) => ({ name, height: heights[index] }));
  pairs.sort((a, b) => b.height - a.height);
  const sortedNames = pairs.map((people) => people.name);
  return sortedNames;
};

const names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];

const result = sortPeople(names, heights);

console.log(result);
