const pickPrimes = function(arr){
    let newArr = [];
    for (let i=0; i < arr.length; i++){
        let n = arr[i];
        let bool = isPrime(n);
        if (bool){
            newArr.push(n);
        }
    }
    return newArr;
}

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

console.log(pickPrimes([12, 3, 7, 18, 11]));
console.log(pickPrimes([17, 23, 9, 42])); 
console.log(pickPrimes([4, 2048, 100, 55])); 