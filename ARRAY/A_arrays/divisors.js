function divisors(num){
    let divisorArray = [];

    for (let i =1; i <= num; i++){
        if(num % i === 0){
            divisorArray.push(i);
        }
    }
    return divisorArray;
}

console.log(divisors(15));
console.log(divisors(7));
console.log(divisors(24));