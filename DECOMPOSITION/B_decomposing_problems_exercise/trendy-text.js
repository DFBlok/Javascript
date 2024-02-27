const trendyText = function(str){
    let arr = str.split(" ");
    let newArr = [];
    
    for(let i=0; i <arr.length; i++){
            let word = arr[i]
            let newWord = removeLastVowel(word)
            newArr.push(newWord)
    }
    return newArr.join(' ')
}

const removeLastVowel = function(str){
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

console.log(trendyText("the concert will be epic"));
console.log(trendyText("breakfast food is wonderful"));
console.log(trendyText("the weather will improve hopefully"));