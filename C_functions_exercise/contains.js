let contains = function(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    return str1.includes(str2);
}

console.log(contains("caterpillar", "pill"));
console.log(contains("lion's share", "on"));
console.log(contains("SORRY", "or"));
console.log(contains("tangent", "gem"));
console.log(contains("clock", "ok"));