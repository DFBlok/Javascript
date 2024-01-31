function maximum(num) {
    

    if (num.length ===0){
        return null;
    }  

    let biggest = num[0];

    for (let i = 1;i < num.length; i++){
        if (num[i] > biggest){
            biggest = num[i];
        }
        
    }    
    return biggest;
}

console.log(maximum([5,6,3,7]));
console.log(maximum([17, 15, 19, 11, 2]));
console.log(maximum([]));