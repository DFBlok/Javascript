function lengthiestWord(sentence){
    let word = sentence.split(' ');

    let longestWord = '';
    let maxLength = 0;

    for (let i=0; i < word.length; i++){
        if (word[i].length > maxLength || (word[i].length === maxLength && i > word.indexOf(longestWord)))
        {
            longestWord = word[i];
            maxLength = word[i].length;
        }
    }
    return longestWord;

}

console.log(lengthiestWord("I am pretty hungry"));
console.log(lengthiestWord("we should think outside of the box")); 
console.log(lengthiestWord("down the rabbit hole")); 
console.log(lengthiestWord("simmer down")); 