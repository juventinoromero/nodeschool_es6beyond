// Array.from
// Object.assign
// Number.isFinite

function copyObject(obj) {
	return Object.assign({}, obj)
}

function checkIfFinite(num) {
	return Number.isFinite(num)
}

function areAllNumbersFinite(arr) {
	return arr.every(Number.isFinite)
}

function convertArrayLikeObject(obj) {
	return Array.from(obj)
}

function displayEvenArguments() {
	return Array.from(arguments).filter(val => val % 2 === 0);
}

// copyObject
var o = {name: 'Tino'}
var o2 = copyObject({}, o)
o2.name = "Roberto"
console.log(o2.name) // 'Roberto'
console.log(o.name) // 'Tino'
console.log('\n')

// checkIfFinite
console.log(checkIfFinite(4)) // true
console.log(checkIfFinite(-3)) // true
console.log(checkIfFinite(4.3)) // true
console.log(checkIfFinite(NaN)) // false
console.log(checkIfFinite(Infinity)) // false
console.log('\n')

// areAllNumbersFinite
var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
console.log(areAllNumbersFinite(finiteNums)) // true
console.log(areAllNumbersFinite(finiteNumsExceptOne)) // false
console.log('\n')

// convertArrayLikeObject
var arrayLike = {
	length: 2,
	splice: function () {},
	0: 'Index of 0',
	1: 'Index of 1'
}
console.log(convertArrayLikeObject(arrayLike))
console.log('\n')

// displayEvenArguments
console.log(displayEvenArguments(1,2,3,4,5,6)) // [2,4,6]
console.log(displayEvenArguments(7,8,9)) // [8]
console.log(displayEvenArguments(1,3,7)) // []