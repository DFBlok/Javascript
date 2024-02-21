const secretCipher = function(str, obj){
    let newStr = '';
    for(let i=0; i < str.length; i++){
        let char = str[i]
        if(obj.hasOwnProperty(char)){
            newStr += obj[char]
        }
        else {
            newStr +='?'
        }
    }
    return newStr;
}

console.log(secretCipher("jello", { j: "r", l: "s", e: "i" }));