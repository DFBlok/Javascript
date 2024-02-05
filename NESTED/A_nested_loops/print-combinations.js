function printCombo(arr1, arr2){
    for (let i =0; i < arr1.length; i++){
        for (let j =0; j < arr2.length; j++){
            console.log(arr1[i]+ " "+ arr2[j]);
        }
    }
}

let colors = ["gray", "cream", "cyan"];
let clothes = ["shirt", "flannel"];

printCombo(colors, clothes);
console.log("--------------------------")
printCombo(["hot", "cold"], ["soup", "tea"]);