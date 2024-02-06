function twoSumPairs(number, target){
    let result = [];
    let seen = new Set();

    //iterate the number array
    for (let i=0; i < number.length; i++){
        for (let j =i + 1; j < number.length; j++ ){
            if (number[i] + number[j] === target){
                let pairString = [number[i], number[j]].sort().join(',');

                if (!seen.has(pairString)){
                    result.push([number[i], number[j]]);
                    seen.add(pairString);
                }
            }
        }
    }
    return result;
}

console.log(twoSumPairs([2, 3, 4, 6, 5], 8));
console.log(twoSumPairs([10, 7, 4, 5, 2], 12));
console.log(twoSumPairs([3, 9, 8], 11));
console.log(twoSumPairs([3, 9, 8], 10));