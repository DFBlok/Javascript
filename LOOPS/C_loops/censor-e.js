let censorE = function(str){
    return str.replace(/e/g, '*');
}

console.log(censorE("speedy"));
console.log(censorE("pending"));
console.log(censorE("scene"));