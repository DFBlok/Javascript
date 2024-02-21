const mostCommonLetter = function(str){
    let obj = {};
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if(obj.hasOwnProperty(char)){
            obj[char] += 1
        }
        else {
            obj[char] = 1
        }
    }
    let k = '';
    let v =0;
    for (let key in obj){
        if (v < obj[key]){
            v = obj[key]
            k = key
        }
    }
    return k
}

console.log(mostCommonLetter("building"));
console.log(mostCommonLetter("shoestring"));
