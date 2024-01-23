//snippet 1
console.log("============snippet_1=============");
if (true){
    console.log("foo");
}


if(true){
    console.log("bar");
}


//snippet 2
console.log("============snippet_2=============");
if(false || false){
    console.log("boop");
}


if(true||false){

    console.log("beep");

}


//snippet 3
console.log("===========snippet_3=============");
let num = 40;

if (num > 0){
    console.log("zip");
}


//snippet 3
if (num % 2 === 0){
    console.log("zoop");
}


//snippet 4
console.log("=============snippet_4============");
let word = "jeep";

if (word[0] === "d"){
    console.log("year");
}
else{
    console.log("nah");
}

//snippet5
console.log("===========snippet_5=============");
let sentence = "roger that";

if (sentence[sentence.length -1] === "t"){
    console.log("end in t");
}
else {
    console.log("does not end in t");
}

if (sentence.length <= 4){
    console.log("short");
}
else{
    console.log("long");
}