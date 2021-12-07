/* LOOPS

FOR

for (let i = 0; i < 10; i++) {
console.log(i);
}

	/* let i = 0 iterator
	   i < 10 condition
	   i++ increments */

for (let i = 0; i < 10; i++) {
console.log(`For Loop Number: ${i}`);
}

For Loop Number: 0
For Loop Number: 1
For Loop Number: 2
For Loop Number: 3
For Loop Number: 4
For Loop Number: 5
For Loop Number: 6
For Loop Number: 7
For Loop Number: 8
For Loop Number: 9

WHILE

let i = 0;
while(i < 10) {
console.log(`While Loop Number: ${i}`);
i++;
}

While Loop Number: 0
While Loop Number: 1
While Loop Number: 2
While Loop Number: 3
While Loop Number: 4
While Loop Number: 5
While Loop Number: 6
While Loop Number: 7
While Loop Number: 8
While Loop Number: 9

LOOPING AN ARRAY

for (let i = 0; i < todos.length; i++) {
console.log(todos[i].text);
}

Take out trash
Meeting with boss
Dentist appt

FOR OF LOOP

for(let todo of todos) {
console.log(todo);
}

{id: 1 text: “Take out trash”, isCompleted: true}
{id: 2 text: “Meeting with boss”, isCompleted: true}
{id: 3 text: “Dentist appt”, isCompleted: false}

for(let todo of todos) {
console.log(todo.text);
}

Take out trash
Meeting with boss
Dentist appt

for(let todo of todos) {
console.log(todo.id);
}

1
2
3

HIGH ORDER ARRAY METHODS (RECOMMENDED)

FOR EACH - LOOPS THROUGH ARRAYS

todos.forEach(function(todo) {
	console.log(todo.text);
});

Take out trash
Meeting with boss
Dentist appt

MAP - CREATE NEW ARRAY FROM ARRAY

const todoText = todos.map(function(todo) {
	return todo.text;
});
console.log(todoText);

0: “Take out trash”
1: “Meeting with boss”
2: “Dentist appt”
length: 3

FILTER - CREATE NEW ARRAY FROM CONDITION

const todoCompleted = todos.filter(function(todo) {
	return todo.isCompleted === true;
});

console.log(todoCompleted);

0:
	id: 1
	isCompleted: true
	text: “Take out trash”
1:
	id: 2
	isCompleted: true
	text: “Meeting with boss”

CHAIN HIGH ORDERS TOGETHER

const todoCompleted = todos.filter(function(todo) {
	return todo.isCompleted === true;
}).map(function(todo) {
	return todo.text;
})

console.log(todoCompleted);

(2) [“Take out trash”, “Meeting with boss”]

*/


