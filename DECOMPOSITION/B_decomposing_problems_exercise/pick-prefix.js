const pickPrefix = function(arr, str){
    let newArr = [];
    for (let i =0; i < arr.length; i++){
        let word = arr[i]; //'the word will come in here'
        if(word.includes(str)){
            newArr.push(word)
        }
    }
    return newArr;
}
console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));