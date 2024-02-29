const pickPerfectSquares = function(arr){
    let newArr =[];
    for(let i =0; i < arr.length; i++){
        let num = arr[i];
        for(let i =1; i < num; i++){
            if(i * i ===num){
                newArr.push(num)
            }
        }
    }
    return newArr;
}

console.log(pickPerfectSquares([6, 4, 81, 22, 36]));
console.log(pickPerfectSquares([100, 24, 144]));
console.log(pickPerfectSquares([30, 25]));
