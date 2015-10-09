/* Object literal */

var person = {
	name: 'First Last',
	age: 33,
	whoAmI: function() {
		console.log('My name is ' + this.name + ' and I am ' + this.age);
	},
};

console.log(person.name); // First Last
console.log(person.age); // 33

var bob = person; // Reference to the person object, instead of creating a new object
bob.name = 'Bob Kats'; // Actually making changes to the person object
bob.age = 49;

console.log(person.name); // Bob Kats -- uh oh!
console.log(person.age); // 49 -- double uh oh!


/* Use a JS pattern to create objects */

// 1. Object.create()

var george = Object.create(person);
george.name = 'George Costanza';
george.age = 39;

console.log(george.whoAmI());
console.log(george); // Object 


// 2. Object Constructor (use "new" keyword) -- can be dangerous to use because of the "this" keyword
function Person(name, age) { // Always has arguments
	this.name = name;
	this.age = age;
}

// use Prototype to change the original object
Person.prototype.whoAmI = function(){
	return 'My name is ' + this.name + ' and I am ' + this.age;
};

var sally = new Person('Sally Fields', 61);
console.log(sally.whoAmI());
console.log(sally); // Person -- does it matter that it didn't return an Object?

sally.award = 'Emmy'; //hasOwnProperty returns true

var mike = new Person('Mike Sanders', 22);
console.log(mike.award); // undefined

Person.prototype.award = 'Golden Globe';
var mike = new Person('Mike Sanders', 22);
console.log(mike.award); // Golden Globe
console.log(sally.award); // Emmy

