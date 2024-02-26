removeLastVowel = function(str){
    newStr = '';
    vowels = "aeiou"
    let lastVowelIndex = -1;
    for (let i =0; i <  str.length; i++){
        let char = str[i]
        if (vowels.includes(char)){
            lastVowelIndex =i;
        }
    }

    if (lastVowelIndex !== -1){
        for (let i =0; i < str.length; i++){
            if (i !== lastVowelIndex){
                newStr += str[i];
            }
        }
    }else {
        newStr = str;
    }
    return newStr;
}

console.log(removeLastVowel("kar"));