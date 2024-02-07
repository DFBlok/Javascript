function elementQuantities(obj) {
    let result = [];
    // Iterate through each key-value pair in the object
    for (let [element, quantity] of Object.entries(obj)) {
        // Push the element into the result array 'quantity' number of times
        for (let i = 0; i < quantity; i++) {
            result.push(element);
        }
    }
    return result;
}

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1));