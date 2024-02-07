let dog = {
    name: "Manny",
    age: 5,
    breed: "pug",
    color: "fawn",
    favoriteFoods: ["bacon"],
    car: "Volkwagen",
};

console.log(dog.age);
console.log(dog.breed);
console.log(dog.favoriteFoods);
console.log("------------------------------");
dog.age++;
dog.breed = dog.breed.toUpperCase();
dog.favoriteFoods.push("sausage");
console.log("---------------------------");
console.log(dog.age);
console.log(dog.breed);
console.log(dog.favoriteFoods);
console.log("------------------------------");
//print everything inside the dog object
for (let property in dog){
    console.log(property + " is " + dog[property]);
}