//451. Sort Characters By Frequency

var frequencySort = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }
  let answer = "";
  const arr = Object.entries(map).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i][0].repeat(arr[i][1]);
    answer += str;
  }
  return answer;
};

const s = "tree";

const result = frequencySort(s);

console.log(result);
