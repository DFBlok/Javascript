function print2d (array){
    for (let i =0; i < array.length; i++){
        let subArray = array[i];
        for (let j =0; j < subArray.length; j++){
            console.log(subArray[j]);
        }
    }
}

let array1 = [
    ["a", "b", "c", "d"],
    ["e", "f", "g", "h", "i"],

];
print2d(array1);
console.log("-----")
let array2 = [
    [9, 3, 4],
    [11],
    [42, 100],

];
print2d(array2);