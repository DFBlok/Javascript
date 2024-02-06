function makeMatrix(m , n, value){
    let matrix = [];

    for (let i =0; i < m; i++){
        let row = [];

        for (let j =0; j < n; j++){
            row.push(value);
        }

        matrix.push(row);
    }

    return matrix;

}

console.log(makeMatrix(3, 5, null));
console.log("------------------------");
console.log(makeMatrix(4, 2, "x"));
console.log("------------------------");
console.log(makeMatrix(2,2,0));