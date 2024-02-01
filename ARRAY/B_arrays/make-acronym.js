let makeAcronym = function(str){
    let acronym ="";
    let arr = str.split(" ");
    
    for (let i=0; i < arr.length; i++){
        let element = arr[i][0].toUpperCase();
        acronym += element[0];

    }
    return acronym;
}

console.log(makeAcronym("New York"));
console.log(makeAcronym("same stuff different day"));
console.log(makeAcronym("Laugh out loud"));
console.log(makeAcronym("don't over think stuff"));