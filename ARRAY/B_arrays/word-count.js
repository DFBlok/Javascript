function wordCount(sentence, targetWords){
    const word = sentence.split(' ');

    let count = 0;

    for (let i=0; i < word.length; i++){
        if (targetWords.includes(word[i])){
            count++;
        }
    }
    return count;
}

console.log(wordCount("open the window please", ["please", "open", "sorry"]));
console.log(wordCount("drive to the cinema", ["the", "driver"]));
console.log(wordCount("can I have that can", ["can", "I"]));
