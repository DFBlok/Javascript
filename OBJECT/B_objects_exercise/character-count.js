const characterCount = function(str){
    let obj = {};
    for (let i =0; i <str.length; i++){
        let char = str[i];
        if(obj.hasOwnProperty(char)){
            obj[char] += 1;
        }
        else{
            obj[char] =1;
        }
    }
    return obj;
}

console.log(characterCount("evening"));