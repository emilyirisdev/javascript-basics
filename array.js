/* Arrays = variables that hold multiple values

CONSTRUCTOR
const numbers = new Array(‘1,2,3,4,5’);
console.log(number);

(5) [1,2,3,4,5]
0: 1
1: 2
2: 3
3: 4
4: 5

const fruits = [‘apples’, ‘oranges’, ‘mangoes’, ‘watermelon’];
console.log(fruits);

(4) [“apples”, “oranges”, “mangoes”, “watermelon”]
0: “apples”
1: “oranges”
2: “mangoes”
3: “watermelon”

console.log(fruits[2]);

“mangoes”  -> arrays are 0 based index

fruits[4] = ‘bananas’;
console.log(fruits);

(5) [“apples”, “oranges”, “mangoes”, “watermelon”, “bananas”]. ENDED HERE

fruits.push(‘guava’);
console.log(fruits);

(6) [“apples”, “oranges”, “mangoes”, “watermelon”, “bananas”, “guava”]
 
fruits.unshift(‘cantaloupe’);
console.log(fruits);

(7) [“cantaloupe“, apples”, “oranges”, “mangoes”, “watermelon”, “bananas”, “guava”]

fruits.pop();  -> removes last item on array
console.log(fruits);

(7) [“cantaloupe“, apples”, “oranges”, “mangoes”, “watermelon”, “bananas”]

console.log(Array.isArray(fruits));  -> checks to see if named is an Array

console.log(fruits.indexOf(‘mangoes’));

3

*/
