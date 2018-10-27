// 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

function tripleAndFilter(arr) {
	return arr.map(function (value) {
		return value * 3;
	}).filter(function (value) {
		return value % 5 === 0;
	})
}

// 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

function doubleOddNumbers(arr) {
	return arr.filter(function (val) {
		return val % 2 !== 0;
	}).map(function (val) {
		return val * 2;
	})
}

// 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

function mapFilterAndReduce(arr) {
	return arr.map(function (val) {
		return val.firstName
	}).filter(function (val) {
		return val.length < 5;
	}).reduce(function (acc, next) {
		acc[next] = next.length
		return acc;
	}, {})
}

/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.
*/

var createStudentObj = (firstName, lastName) => ({ firstName: firstName, lastName: lastName });

// 5 - Given the following code: 
// Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Tino'

var instructor = {
	firstName: "Tino",
	sayHi: function () {
		setTimeout(function () {
			console.log('Hello ' + this.firstName)
		}, 1000)
	}
}



/**
 * Example results with expected outputs
 * node 1-Arrow_Functions.js
 */

var arr1 = [4,5,8,10,12];
console.log(tripleAndFilter(arr1));  // [15, 30]

var arr2 = [2,3,4,5,6];
console.log(doubleOddNumbers(arr2));  // [6, 10]

var arr3 = [{firstName: 'Juventino'}, {firstName: 'Tino'}, {firstName: 'Constantino'}, {firstName: 'You'}];
console.log(mapFilterAndReduce(arr3));  // { Tino: 4, You: 3 }

console.log(createStudentObj('Tino', 'Romero'));  // { firstName: 'Tino', lastName: 'Romero' }

instructor.sayHi();  // Hello Tino