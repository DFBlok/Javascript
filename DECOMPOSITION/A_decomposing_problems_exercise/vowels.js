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

console.log(doubleVowel("runner"));
console.log(doubleVowel("stoplight")); 
console.log(doubleVowel("gardener"));