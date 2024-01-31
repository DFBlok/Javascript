/* let stayPositive = function(num){
    let positiveNumbers = [];

    for (let i =0; i < num.length; i++){
        
        
        if (num[i] > 0){
            positiveNumbers.push(num[i]);

        }
        
        
    }
    return positiveNumbers();
}
 */
function stayPositive(num){
    let positiveNumbers = [];

    for (let i = 0 ;i < num.length; i++){
        if (num[i] > 0){
            positiveNumbers.push(num[i]);
        }
    }
    return positiveNumbers;
}

console.log(stayPositive([10,-4,3,6]));
console.log(stayPositive([-5, 11, -40, 30.3, -2]));
console.log(stayPositive([-11, -30]));