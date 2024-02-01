function chooseDivisible(num, target){
    let divisibles = [];

    for (let i =0; i < num.length; i++){
        if (num[i] % target === 0){
            divisibles.push(num[i]);
        }
    }
    return divisibles;
}

console.log(chooseDivisible([40, 7, 22, 20, 24], 4));
console.log(chooseDivisible([9, 33, 8, 17], 3));
console.log(chooseDivisible([4, 25, 1000], 10)); 