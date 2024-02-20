const isPrime = function(num){
    if (num < 2){
        return false;
    }

    for (let i =2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(8));
console.log(isPrime(7));
console.log(isPrime(21));
console.log(isPrime(2));
console.log(isPrime(15));
console.log(isPrime(1));