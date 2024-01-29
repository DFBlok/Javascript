let oneOrNone = function(value1, value2){
    return (value1 !== value2);
};

console.log(oneOrNone(false, false));
console.log(oneOrNone(true, false));
console.log(oneOrNone(false, true));
console.log(oneOrNone(true, true));