
let total = function(num){
    let sum = 0;
    for (let i =0; i <num.length; i++){
        sum +=num[i];
    }
    return sum;
}

console.log(total([3, 2, 8]));