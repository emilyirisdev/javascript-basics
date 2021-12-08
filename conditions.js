/* CONDITIONALS

const x = 10;
if(x == 10) {
	console.log(‘x is 10);
}
x is 10

const x = ’10’;
if(x === 10) {
	console.log(‘x is 10);
}
is not true bc === matches the data types. 

const x = 20;
  if(x == 10) {
  console.log(‘x is 10);
} else {
  console.log(‘x is NOT 10’);
}
x is NOT 10

const x = 20;
   if(x == 10) {
   console.log(‘x is 10);
}  else if(x > 10) {
   console.log(‘x is greater than 10’);
}  else {
   console.log(‘x less than 10’);
}
x is greater than 10

const x = 4;
const y = 11;
   if(x > 5 || y > 10) {
   console.log(‘x is more than 5 or y is more than 10’);
}
x is more than 5 or y is more than 10

const x = 4;
const y = 11;
   if(x > 5 && y > 10) {
   console.log(‘x is more than 5 and y is more than 10’);
}
since the conditions are NOT met (i.e. both x > 5 AND y > 10), nothing shows

TERNARY OPERATOR

const x = 10;
const color = x > 10 ? ‘red’ : ‘blue’;  -> first parameter (x > 10) = “if”, ? = “than”, : = “else” 
console.log(color);

blue

const x = 13;
const color = x > 10 ? ‘red’ : ‘blue’;  
console.log(color);

red

SWITCHES

const x = 13;
const color = x > 10 ? ‘red’ : ‘blue’;  
console.log(color);

switch(color) {
case ‘red’:
console.log(‘color is red’);
break;

case ‘blue’:
console.log(‘color is blue’);
break;

default:
console.log(‘color is NOT red or blue’);
break;
}

color is red

const x = 7;
const color = x > 10 ? ‘red’ : ‘blue’;  
console.log(color);

switch(color) {
case ‘red’:
console.log(‘color is red’);
break;

case ‘blue’:
console.log(‘color is blue’);
break;

default:
console.log(‘color is NOT red or blue’);
break;
}

color is blue

*/
