function stringsToLengths(str){
     let numOfString = [];

    for (let i = 0; i < str.length; i++){
        numOfString.push(str[i].length);   
    }
    return numOfString;
}

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
console.log(stringsToLengths(["on", "off", "handmade"]));