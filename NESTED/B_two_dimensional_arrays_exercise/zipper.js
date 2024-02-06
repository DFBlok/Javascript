function zipper(array1, array2){
    let results = [];

    for (let i=0;i < array1.length; i++ ){
        let pair = [array1[i], array2[i]];

        results.push(pair);
    }
    return  results;
}

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
console.log("---------------------------");
let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
