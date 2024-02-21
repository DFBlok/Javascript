const wordReplace = function(str, obj){
    let arr = str.split(" ");
    let newArr =[];
    for(let i=0; i < arr.length; i++){
        let word = arr[i];
        if (obj.hasOwnProperty(word)){
            newArr.push(obj[word])
        }
        else{
            newArr.push(word)
        }
    }
    return newArr.join(" ");
}

console.log(wordReplace("I never take naps during the day", { never: "always", day: "weekend" }));
console.log(wordReplace("the park is closed", { closed: "open", the: "a" }));