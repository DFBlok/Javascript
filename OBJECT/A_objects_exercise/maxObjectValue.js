function maxObjectValue(obj) {
    // Initialize variables to track the maximum value and corresponding key
    let maxKey, maxValue = -Infinity;
    // Iterate through each key-value pair in the object
    for (let [key, value] of Object.entries(obj)) {
        // If the current value is greater than the current maximum value, update the maxKey and maxValue
        if (value > maxValue) {
            maxKey = key;
            maxValue = value;
        }
    }
    // Return an array containing the key, value pair for the largest value
    return [maxKey, maxValue];
}

console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ lychee: 11, rambutan: 13, papaya: 9 })); 