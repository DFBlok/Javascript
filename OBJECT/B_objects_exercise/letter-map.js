const letterMap = function(str, obj){
    let newStr = '';
    for (i=0;i < str.length; i++){
        let char = str[i];
        if(obj.hasOwnProperty(char)){
            newStr += obj[char]
        }
        else{
            newStr += char
        }

    }
    return newStr;
}

console.log(letterMap("symbolic", { y: "i", o: "a", c: "k" }));
console.log(letterMap("colossal", { o: "x", s: "p" }));
console.log(letterMap("miniscule", { u: "t", i: "f", e: "q" }));