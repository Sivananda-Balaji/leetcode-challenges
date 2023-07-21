//274. H-Index
var hIndex = function (citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a);
  console.log(citations);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= hIndex + 1) {
      hIndex++;
    }
  }
  return hIndex;
};

const citations = [1, 3, 1];

const result = hIndex(citations);

console.log(result);
