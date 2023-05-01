"use strict";
// Ternary Operator
// node-dev --respawn src/question-mark.ts
const age = 25;
// if (age >= 18) {
// 	console.log("Adult");
// } else {
// 	console.log("Not Adult");
// }
const isAdult = age >= 18 ? "yes" : "No";
console.log(isAdult);
// Nullish Coalescing Operator // Null and Undefine
const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
console.log(userName);
