function keyPair(obj1, obj2, key){
    const value1 = obj1[key];
    const value2 = obj2[key];

    return [value1, value2];
}

let cat1 = {name: "jinkee", breed: "calico"};
let cat2  = {name: "garfield", breed: "red taddy"};
console.log(keyPair(cat1, cat2, "breed"));
console.log(keyPair(cat1, cat2, "name"));

let sport1 = { name: "volleyball", team: true };
let sport2 = { name: "golf", team: false };
console.log(keyPair(sport1, sport2, "team"));