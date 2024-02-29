const lalaLanguage = function(str){
    let arr = str.split(" ");
    let resultArr = []; 

    for (let i =0; i < arr.length; i++){
        let word = arr[i];
        
        if(word.length > 3){
            let newWord = changeVowel(word);
            resultArr.push(newWord);
        }else {
            resultArr.push(word);
        }

    }
    return resultArr.join(" ");
}

function changeVowel(word){
    let vowel = "aeiou";
    let changeWord = "";
    for(let i=0; i < word.length; i++){
        let char = word[i];
        if(vowel.includes(char)){
            changeWord += char + "l"+char;
        }else {
            changeWord  += char;
        }
    }
    return changeWord;
}

console.log(lalaLanguage("this is pretty strange"));
console.log(lalaLanguage("can you speak our language"));