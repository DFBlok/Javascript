const funnyPhase = function(str){
    let arr =str.split(' ');
    let newArray = [];

    for (let i =0; i < arr.length; i++){
        let word = arr[i];
        if (i % 2 !== 0){
            let newWord = doubleVowel(word);
            newArray.push(newWord);

        }
        else {
            newArray.push(word);
        }
    }
    return newArray.join(" ");
}

function doubleVowel(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < str.length; i++){
        const char = str[i];
        result += char;

        if (vowels.includes(char)){
            result += char;
        }
    }
    return result;
}

console.log(funnyPhase("she dreamed of being a runner"));
console.log(funnyPhase("park near the stoplight")); 
console.log(funnyPhase("we need many gardeners"));