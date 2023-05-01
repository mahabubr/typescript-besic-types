"use strict";
// Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// Arrow Function
const ArrowAdd = (num1, num2) => num1 + num2;
ArrowAdd(2, 2);
// ----------------------------------------------------------------------------------------
const arr = [1, 4, 5, 7];
const newArr = arr.map((elem) => elem * elem);
// ----------------------------------------------------------------------------------------
const people = {
    name: "mezba",
    balance: 5,
    addBalance(money) {
        console.log(`My New Balance is ${this.balance + money}`);
    },
};
// Default Parameter
function add1(num1, num2 = 10) {
    return num1 + num2;
}
add1(2);
// Spread Operator
const myFriends = ["SRK", "salman", "alia"];
const newFriends = ["Depeka", "Kartik", "Amir"];
myFriends.push(...newFriends);
// console.log(myFriends);
// Rest Parameter
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`hi ${friend}`));
};
greetFriends("Hashem", "Kashem", "Nasem", "Lashem", "nashem", "zashem");
// Destructuring
const [bestFriend] = myFriends;
const { balance, name: fullBalance } = people;
