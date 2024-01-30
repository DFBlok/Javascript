let oddSum = function(max){
    let sum = 0;
    for (let i =1; i <= max; i += 2){
        sum += i;
        
    }
    return sum;
}

console.log(oddSum(10));
console.log(oddSum(5));
console.log(oddSum(2));