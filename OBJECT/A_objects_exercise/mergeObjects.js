function mergeObj(obj1, obj2){
    //create a new object to hold the merge properties
    let mergeObj = {};

    //copy properties from obj1 to mergeObj
    for (let key in obj1){
        mergeObj[key] = obj1[key];
    }

    for (let key in obj2){
        mergeObj[key] = obj2[key];
    }
    return mergeObj;

}

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 4, c: 5, d: 6 };
console.log(mergeObj(obj1, obj2));