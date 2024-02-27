const mostLetterWord = function(str, char){
    let arr = str.split(" ");
    let obj= {};
    for(let i =0; i < arr.length; i++){
        let word = arr[i];
        
        let count = countCharater(word, char) 
        
        obj[word] = count
       
    }
    let num =0;
    let prop = '';

     for(property in obj){
        let val = obj[property]
        if(val > num){
            num = val;
            prop = property;
        }

     }
     return prop;
}

const countCharater = function(word, char){
    let count =0;
    for(let i=0; i < word.length; i++){
        let char = word[i];
        if(str === char){
            count += 1
        }
    }
    return count;
}

console.log(mostLetterWord('she received an award for excellence in science', 'e'));
console.log(mostLetterWord('she received an award for excellence in science', 'a')); 
console.log(mostLetterWord('I hope sophomore year comes soon', 'o'));
console.log(mostLetterWord('I hope sophomore year comes soon', 's'));