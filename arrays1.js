//Task
let groceories = ["apple", "banana", "milk", "meat", "water bottels", "toast"];

console.log(groceories[1]);
console.log(groceories.length);
let lastElement = groceories.length - 1;
console.log(groceories[lastElement]);

const finalElement = groceories.pop();
console.log(finalElement);
groceories.push("eggs", "soda");
console.log(groceories);

let firstThreeitems = groceories.slice(0, 3);
console.log(firstThreeitems);

//Challenge
let groceoriesWoutThird = groceories.splice(2, 1);
console.log(groceories);

groceories.unshift("potatos");
console.log(groceories);

groceories.splice(0, 2);
groceories.unshift("ketchup", "chili");

console.log(groceories);
