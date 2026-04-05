// Activity 7: Array and Object Demonstrations

console.log("=== Activity 7: Product Catalog Display ===");

// ===== ARRAY DEMONSTRATIONS =====
console.log("\n=== ARRAY DEMONSTRATIONS ===");

// Creating arrays
const numbersArray = [1, 2, 3, 4, 5];
const colorsArray = new Array('red', 'green', 'blue');
const mixedArray = [42, 'hello', true, null, { name: 'John' }];

console.log("Numbers array:", numbersArray);
console.log("Colors array:", colorsArray);
console.log("Mixed array:", mixedArray);

// Array methods
const fruits = ['apple', 'banana'];
console.log("Original fruits:", fruits);

fruits.push('orange');
console.log("After push:", fruits);

const removedLast = fruits.pop();
console.log("After pop:", fruits, "Removed:", removedLast);

fruits.unshift('grape');
console.log("After unshift:", fruits);

const removedFirst = fruits.shift();
console.log("After shift:", fruits, "Removed:", removedFirst);

// Array iteration
const numbers = [1, 2, 3, 4, 5];

console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log("Index", i, "Value", numbers[i]);
}

console.log("For...of loop:");
for (const num of numbers) {
    console.log("Value:", num);
}

console.log("forEach:");
numbers.forEach((num, index) => {
    console.log("Index", index, "Value", num);
});

console.log("map (double values):");
const doubled = numbers.map(num => num * 2);
console.log(doubled);

console.log("filter (even numbers):");
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// ===== OBJECT DEMONSTRATIONS =====
console.log("\n=== OBJECT DEMONSTRATIONS ===");

// Creating object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};

console.log("Person:", person);

// Accessing properties
console.log("Dot notation:", person.firstName);
console.log("Bracket notation:", person["lastName"]);

// Adding and modifying
person.email = "john@example.com";
person.age = 31;

console.log("After update:", person);

// Deleting property
delete person.city;
console.log("After delete:", person);

// ===== ARRAYS OF OBJECTS =====
console.log("\n=== ARRAYS OF OBJECTS ===");

const items = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 50, inStock: true },
    { name: "Monitor", price: 300, inStock: false }
];

console.log("Items:", items);

// filter
const available = items.filter(item => item.inStock);
console.log("Available items:", available);

// map
const itemNames = items.map(item => item.name);
console.log("Item names:", itemNames);

// reduce
const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
console.log("Total price:", totalPrice);

console.log("\n=== Demonstrations Complete ===");
