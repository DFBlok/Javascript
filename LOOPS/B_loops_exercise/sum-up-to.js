let sumUpTo = function(max){
    let sum = 0;
    for(let i = 1; i <= max ;i++){
        sum += i;
    }
    return sum;
}

console.log(sumUpTo(4));
console.log(sumUpTo(5));
console.log(sumUpTo(2));