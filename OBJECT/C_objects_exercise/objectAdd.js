const objectAdd = function(obj1, obj2){
    let newObj = {};

    for(let key in obj1){
        if(obj2.hasOwnProperty(key)){
            newObj[key] = obj1[key] + obj2[key]
        }else{
            newObj[key] = obj1[key];
        }
    }

    for(let key in obj2){
        if(!newObj.hasOwnProperty(key)){
            newObj[key] = obj2[key]
        }
    }
    return newObj;

}

let obj1 = { x: 3, y: 10 };
let obj2 = { y: 2, x: 1 };
console.log(objectAdd(obj1, obj2));

let obj3 = { a: 3, b: 2, c: -1 };
let obj4 = { b: 5, c: 1, e: 4 };
console.log(objectAdd(obj3, obj4));