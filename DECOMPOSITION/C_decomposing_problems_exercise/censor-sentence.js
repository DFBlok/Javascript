const censorSentence= function(str, arr){
     let splitArr = str.split(" ");
     let newArr = [];

     for(let i=0; i< splitArr.length; i++){
        let word = splitArr[i];
        if(arr.includes(word)){
            let star = changeToStart(word);
            newArr.push(star);
        }else{
            newArr.push(word);
        }
    }
    return newArr.join(" ");
}

function changeToStart(word){
    let starWord = '';
    for(let i=0; i < word.length; i++){
        starWord += '*';
    }
    return starWord;
}

console.log(censorSentence("where the heck is my celery", ['heck', 'celery']));
console.log(censorSentence("why you little sweetheart",['sweetheart'], ['salad']));