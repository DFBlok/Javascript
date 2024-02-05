function twoSum(numbers, target){
    let seen = new Set();

    for (let num of numbers){
        let complement = target - num;

        if (seen.has(complement)){
            return true;
        }    

        seen.add(num);
    
    }

    return false;
}

console.log(twoSum([2, 3, 5, 9], 7));
console.log(twoSum([2, 3, 5, 9], 4));
console.log(twoSum([6, 3, 4], 10)); 
console.log(twoSum([6, 5, 1], 10));