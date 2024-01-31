function numOdds(num){
    let oddNums = 0;

    for (let i = 0; i < num.length; i++){
        if ( num[i] % 2 !== 0 ){
            oddNums++;
        }
    }
    return oddNums;
}

console.log(numOdds([4, 7, 2, 5, 9]));
console.log(numOdds([11, 31, 58, 99, 21, 60]));
console.log(numOdds([100, 40, 4]));