let caseChange = function(str, bool){
    
    let wordDown = str.toLowerCase();
    

    if (bool === true){
        /*let wordUp = str.toUpperCase();
        return wordUp();*/
        return str.toUpperCase();
    }
    else{
        return str.toLowerCase();
    }
}

console.log(caseChange("Super", true));
console.log(caseChange("Super", false));
console.log(caseChange("tAmBourine", true));
console.log(caseChange("tAmBourine", false));