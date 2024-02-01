function yourAverageFunction(num){
    if(num.length === 0){
        return null;
    }

    let sum =0;

    for(let i =0; i < num.length; i++){
        sum += num[i];       
    }

    let average = sum / num.length;

    return average;
}

console.log(yourAverageFunction([5,2, 7,24]));
console.log(yourAverageFunction([100, 6]));
console.log(yourAverageFunction([31, 32, 40, 12, 33]));
console.log(yourAverageFunction([])); 