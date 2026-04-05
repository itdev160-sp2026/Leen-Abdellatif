// Activity 1

// Part A: Console Hello World
console.log("Hello, World!");

// Part B: Webpage Hello World
document.getElementById("output").innerHTML = "<h2>Hello, World!</h2>";

// Part C: Variable Declarations
let studentName = "Leen Abdellatif";   // string (your real name)
const age = 20;                        // example age
let isStudent = true;                  // boolean
let emptyValue = null;                 // null
let notAssigned;                       // undefined

// Part D: Console Output
console.log("=== Variable Values ===");
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Empty Value:", emptyValue);
console.log("Not Assigned:", notAssigned);

console.log("=== Variable Types ===");
console.log("typeof studentName:", typeof studentName);
console.log("typeof age:", typeof age);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof emptyValue:", typeof emptyValue);
console.log("typeof notAssigned:", typeof notAssigned);

// Part E: Variable Reassignment
console.log("=== Variable Reassignment ===");
console.log("Original studentName:", studentName);

studentName = "Leen A.";   // new name for reassignment
console.log("Updated studentName:", studentName);

// Trying to change const -> error if uncommented
// age = 21;
