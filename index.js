/* ============= Invert Values Exercise ==============*/

// Given a set of numbers, return the additive inverse of each.
// Each positive number becomes negative, negative becomes positive.
// Watch for zero edge case.
// Build for this, invoke and pass test parameters of [0,1,3,-2]
// Function takes in 1 param 'arr'
// Output should be [0,-1,-3,2]



// This is ES5 Way
function additiveInverse(arr){
  //push into new array and return it
  var addInver = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 || arr[i] < 0) {
      addInver.push((arr[i]*-1));
    } else {
      addInver.push(arr[i]);
    }
  }
  
  return addInver;
}

additiveInverse([0,1,3,-2]);




/* ============= Welcome to ES6 ==============*/

function invert(arr) {
  return arr.map(x => === 0 ? x : -x);
}
console.log(invert([0,1,2,-3]);

// => arrow function | statement you're checking
// ? ternary function | initializes above
// map auto returns new array
// true : false

// Some websites cant read es6, use compiler to make it readable 
// examples of compilers: Babble

function varTest() {
  var x = 1;

  if(true) {
    var x = 2; // Same variable x
    console.log(x); // value of x is 2
  }
  console.log(x); // value of x is 2

}


// let protects variables from being reassigned, controls 'hoisting' and 'scope'
function letTest() {
  let x = 1;

  if(true) {
    let x = 2; // Same variable x
    console.log(x); // value of x is 2
  }

  console.log(x) // value of x is 1
}


// const is used when you don't want value to change, usually denoted by all caps

const PI = 3.1415;
PI = 22;
console.log(PI); // shows '3.1415'




/* ============= Practice / Notes ==============*/


// ES5
var square = function(a, b) {
  return a*b;
}

// ES6 with arrow function
let square = num => return num * num; 

square(4); // returns 16


// arrow functions can be called globally


// rewrite function in ES6

// ES5
function ageCalc( born, currYear) {
  var age = currYear - born;
  return age;
}

// ES6
let ageCalc = (born, currYear) => return currYear - born; 
// ^^^use if you dont want to save age to a variable



// Functional Array Methods
let arr = [1,2,3,4];

arr.forEach((entry) => {
  console.log(entry * 2);
});

/*

Difference Between map() and forEach():
-forEach runs function on each element of an array, does not modify original array
-map still iterates, but returns new array, while still calling function one each element in array (map to a variable)

*/





/* ============= Reduce ==============*/


// use reduce to merge multiple items into a single array
var total = [0,1,2,3].reduce(function(sum, value) {
  return sum + value;
}, 0); // 0 is index, says where to start
// accumulator is the result of the previous iteration





/* ============= Object Oriented Programming Notes==============*/

/*

presentation: <adffadfdasf> slies.com.theremix.es6-oop#/2

methods are functions attached to objects

WHy OOP?
-OOP promotes DRY principle through multiple instances and inheritance
-promotes encapsulation : through access modifiers | by exposing a defined interface
-variables can be private to classes, noted with _, not really private because it can be changed outside of class but 'stays inside class'
-children of class with private var have access to it

-Classes have names that are always capitalized (i.e. 'Rocket')
	-they can have a constructor method, says what class accepts
	-define properties
	i.e. 
		${something} -> injects blah into string
	-think of classes as blueprints for how other objects are built
	-not objects, though technically they are
	-objects with classes can have individual properties
	-can define methods
	-getters and setters used to access/ 'expose' private vars
	-use above methods to change private vars
	-'Superclasses' are original classes
	-classes can be extended
	- call super class to use constructor using 'super( constructed )'
	- cant be invoked like functions, need to be invoked using 'new'
	i.e.
		var raccoon = new Rocket('Raccoon', 'The Moon')


-Objects are instances of classes

*/


/* ============= Morning Exercise 8/16/17 ==============*/

// ES5
function formMoneh(amt) {
	return "$" + amt.toFixed(2);
}

// ES6
var formatMoney = amt => "$" + amt.toFixed(2);

console.log(formatMoney(3));