/* FUNCTIONS

function addNums(num1, num2) {
console.log(num1 + num2);
}
addNums(5,4);

9

function addNums(num1, num2) {
console.log(num1 + num2);
}
addNums();

NaN. -> Not a Number

function addNums(num1 = 1, num2 = 1) {
console.log(num1 + num2);
}
addNums();

2

USE CONSOLE.LOG OUTSIDE OF FUNCTION
function addNums(num1 = 1, num2 = 1) {
return num1 + num2;
}
console.log(addNums(5, 5));

10

ARROW FUNCTIONS

const addNums = (num1 = 1, num2 = 1) => {
return num1 + num2;
}
console.log(addNums(5, 5));

10

ARROW FUNCTION ONE EXPRESSION SIMPLIFICATION 

const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNums(5, 5);

10

const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(5, 5));

10

const addNums = num1 => num1 + 5);
console.log(addNums(5));

10

todos.forEach((todo) => console.log(todo));

*/

