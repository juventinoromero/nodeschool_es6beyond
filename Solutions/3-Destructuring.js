function displayStudentInfo(obj) {
	var { first, last } = obj;
	return `Your full name is ${first} ${last}`
}

function printFullName({ first, last }) {
	return `Your full name is ${first} ${last}`
}

function createStudent({ likesJavaScript = true, likesES2015 = true } = {}) {
	var start = 'The student';
	if (likesJavaScript && likesES2015) {
		start += ' likes JavaScript and ES2015'
	} else if (likesJavaScript) {
		start += ' likes JavaScript!'
	} else if (likesES2015) {
		start += ' likes ES2015!'
	} else {
		start += ' does not like much...'
	}
	return start;
}

function reverseArray(arr) {
	for (var i = 0; i < arr.length / 2; i++) {
		[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
	}
	return arr;
}

// displayStudentInfo
console.log(displayStudentInfo({first: 'Tino', last:'Romero'})) // 'Your full name is Tino Romero')

// printFullName
console.log(printFullName({first: 'Tino', last:'Romero'})) // 'Your full name is Tino Romero'

// createStudent
console.log(createStudent()) // 'The student likes JavaScript and ES2015')
console.log(createStudent({likesES2015:false})) // 'The student likes JavaScript!')
console.log(createStudent({likesJavaScript:false})) // 'The student likes ES2015!')
console.log(createStudent({likesJavaScript:false, likesES2015:false})) // 'The student does not like much...')

// reverseArray
console.log(reverseArray([1,2,3,4,5])) // [5,4,3,2,1]
console.log(reverseArray([1,2])) // [2,1]
console.log(reverseArray([])) // []
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10])) // [10,9,8,7,6,5,4,3,2,1]