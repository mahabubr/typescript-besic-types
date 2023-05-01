"use strict";
const crush1 = {
    name: "moina pakhi",
    age: 22,
    profession: "web developer",
    address: "Uganda",
};
const crush2 = {
    name: "tia pakhi",
    profession: "next level web developer",
    address: "mexico",
};
const isCrushMarried = false;
const courseName = "New Level Web Development";
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
