//1009. Complement of Base 10 Integer

var bitwiseComplement = function (n) {
  const binary = n.toString(2);
  let answer = "";
  for (let i = 0; i < binary.length; i++) {
    if (Number(binary[i])) {
      answer += 0;
    } else {
      answer += 1;
    }
  }
  return parseInt(answer, 2);
};

const result = bitwiseComplement(5);

console.log(result);
