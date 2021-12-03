/* Object Literals

const person = {
	firstName: ‘John’,
	lastName: ‘Doe’,
	age: 30,
	hobbies: [‘music, ‘art’, ‘crafts’],
	address: {
		street: ‘101 highway ave’,
		city: ‘Portland’,
		state: ‘OR’,
		}
	}

console.log(person);  -> lists all values
console.log(person.lastName);  -> single value
console.log(person.firstName, person.lastName);  -> lists values called

console.log(person.hobbies[1]);

art

console.log(person.address.city);

Portland

To destructure into variables:

const { firstName, lastName } = person;
console.log(firstName);

John

const { firstName, lastName, address: { city } } = person;
console.log(city);

Portland

person.email = ‘john@gmail.com’;  -> add email and email address to person
console.log(person);

now includes all values including email


ARRAY OF OBJECTS

const todos = [
{
	id: 1,
	text: ‘Take out trash’,
	isCompleted: true
},
{
	id: 2,
	text: ‘Meeting with boss’,
	isCompleted: true
},
{
	id: 3,
	text: ‘Dentist appointment’,
	isCompleted: false
}
];

console.log(todos[1].text);

Meeting with boss

JSON FORMATTER

enter at https://jsonformatter.curiousconcept.com/#

[
   {
      "id":1,
      "text":"Take out trash",
      "isCompleted":true
   },
   {
      "id":2,
      "text":"Meeting with boss",
      "isCompleted":true
   },
   {
      "id":3,
      "text":"Dentist appointment",
      "isCompleted":false
   }
]

*/
