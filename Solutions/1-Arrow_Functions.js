// function tripleAndFilter(arr){
//   return arr.map(function(value){
//     return value * 3;
//   }).filter(function(value){
//     return value % 5;
//   })
// }

// 1
let tripleAndFilter = arr => arr.map(val => val * 3).filter(val => val % 5 === 0);

// function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }

// 2
let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);

// function mapFilterAndReduce(arr){
//   return arr.map(function(val){
//     return val.firstName
//   }).filter(function(val){
//     return val.length < 5;
//   }).reduce(function(acc,next){
//     acc[next] = next.length
//     return acc;
//   }, {})
// }

// 3
let mapFilterAndReduce = (arr) => arr.map(val => val.firstName).filter(val => val.length < 5)
	.reduce((acc, next) => {
		acc[next] = next.length
		return acc;
	}, {})

// 4
let createStudentObj = (firstName, lastName) => ({ firstName: firstName, lastName: lastName });

// var instructor = {
//   firstName: "Tino",
//   sayHi: function(){
//     setTimeout(function(){
//       console.log('Hello ' + this.firstName)
//     },1000)
//   }
// }

// 5
var instructor = {
	firstName: "Tino",
	sayHi: function () {
		setTimeout(() => {
			console.log('Hello ' + this.firstName)
		}, 1000)
	}
}


var arr1 = [4,5,8,10,12];
console.log(tripleAndFilter(arr1));

var arr2 = [2,3,4,5,6];
console.log(doubleOddNumbers(arr2));

var arr3 = [{firstName: 'Juventino'}, {firstName: 'Tino'}, {firstName: 'Constantino'}, {firstName: 'You'}];
console.log(mapFilterAndReduce(arr3));

console.log(createStudentObj('Tino', 'Romero'));

instructor.sayHi();