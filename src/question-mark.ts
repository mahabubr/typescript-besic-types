// Ternary Operator

// node-dev --respawn src/question-mark.ts

const age: number = 25;

// if (age >= 18) {
// 	console.log("Adult");
// } else {
// 	console.log("Not Adult");
// }

const isAdult = age >= 18 ? "yes" : "No";
console.log(isAdult);

// Nullish Coalescing Operator // Null and Undefine

const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser ?? "Guest";
console.log(userName);

