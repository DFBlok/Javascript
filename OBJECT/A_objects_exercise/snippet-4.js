let recipe = {
    name: "Old Fashioned Pancakes",
    difficulty: "easy",
    tasty: true,
    ingredients: ["eggs", "milk", "butter", "flour", "sugar"],
};

console.log(recipe.name);
console.log(recipe["name"]);
console.log(recipe.ingredients.length);
console.log(recipe.calories);
console.log("---------------------------");
let someVariable = "difficulty";
console.log(recipe[someVariable]);
console.log(recipe.someVariable);
console.log("---------------------------");
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}