let alice = function(n){
    for (let i=0; i <= n; i++){
        bob(i);
    }
};

let bob = function(n){
    if (n % 2 === 0){
        console.log("GOOD");
    }
    else {
        console.log("BAD");
    }
};

alice(4);