let endsWithT = function(str){
    return str.charAt(str.length -1).toLowerCase() === "t";
}

console.log(endsWithT("smart"));
console.log(endsWithT("racket"));
console.log(endsWithT("taco"));

