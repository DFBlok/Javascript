function print2d (array){
    for (let innerArray of array){
        for (let element of innerArray){
            console.log(element);
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