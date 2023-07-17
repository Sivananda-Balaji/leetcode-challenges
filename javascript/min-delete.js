//Minimum Deletion

const minDeletions = (str) => {
  const map = {};
  const numSet = new Set();
  let deletion = 0;
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }
  for (let value in map) {
    let freq = map[value];
    while (numSet.has(freq) && freq > 0) {
      freq--;
      deletion++;
    }
    if (freq > 0) {
      numSet.add(freq);
    }
  }
  return deletion;
};

const result = minDeletions(
  "aabbccdddeeezzhbsdhhhhdbbbbaaaaawwwwwdxcxcdsddddddhh"
);

console.log(result);
