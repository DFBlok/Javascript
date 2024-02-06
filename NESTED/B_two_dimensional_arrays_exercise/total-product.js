function totalProduct(array){
    let product =1;
    for (let subArray of array){
        for (let num of subArray){
            product *= num;

        }
    }
    return product;
}

let array1 = [
    [3,5,2],
    [6,2],
];
console.log(totalProduct(array1));

let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2));