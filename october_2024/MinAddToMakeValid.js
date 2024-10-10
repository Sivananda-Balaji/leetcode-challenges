//921. Minimum Add to Make Parentheses Valid

var minAddToMakeValid = function(s) {
    const map = [];
    let uncounted = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            map.push(s[i])
        }else if(s[i]===")"){
            if(map.at(-1)==="("){
                map.pop();
            }else{
                uncounted++
            }
        }
    }
    return uncounted+map.length;
};

const s = "()))((";

const result = minAddToMakeValid(s);

console.log(result);