// maps
class MessageBoard {
	constructor() {
		this.messages = new Map
		this.id = 1;
	}
	addMessage(value) {
		this.messages.set(this.id, value);
		this.id++
		return this;
	}
	findMessageById(id) {
		return this.messages.get(id)
	}
	findMessageByValue(val) {
		for (let msg of this.messages.values()) {
			if (msg === val) return msg;
		}
	}
	removeMessage(id) {
		this.messages.delete(id);
		return this;
	}
	numberOfMessages() {
		return this.messages.size;
	}
	messagesToArray() {
		return Array.from(this.messages.values())
	}
}

// sets
function uniqueValues(arr) {
	return new Set(arr).size
}

function hasDuplicates(arr) {
	return new Set(arr).size !== arr.length
}

function countPairs(arr, num) {
	var cache = new Set(arr);
	var count = 0;
	for (let val of arr) {
		cache.delete(val)
		if (cache.has(num - val)) {
			count++
		}
	}
	return count;
}

var m = new MessageBoard  
console.log(m.hasOwnProperty('messages')) // true
console.log(m.messages.constructor) // function Map() { [native code] }
console.log(m.hasOwnProperty('id')) // true
console.log(m.id) // 1
m.addMessage('hello')
console.log(m.messages.size) // 1
console.log(m.addMessage('awesome!')) // m
m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')
console.log('\n');

var m2 = new MessageBoard
m2.addMessage('hello!')
m2.addMessage('hi!')
m2.addMessage('whats up?')
console.log(m2.findMessageById(1)) // 'hello!'
console.log(m2.findMessageById(2)) // 'hi!'
console.log(m2.findMessageById(3)) // 'whats up?'
console.log(m2.findMessageById(4)) // undefined
console.log(m2.findMessageById()) // undefined
m2.removeMessage(1)
m2.removeMessage(2)
console.log(m2.messages.size) // 1
console.log(m2.removeMessage()) // m
console.log('\n');
  
var m3 = new MessageBoard
m3.addMessage('hello!')
m3.addMessage('hi!')
m3.addMessage('whats up?')
console.log(m3.numberOfMessages()) // 3
console.log(m3.messagesToArray()) // ['hello!', 'hi!', 'whats up?'])
console.log('\n');

console.log(uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])) // 6
console.log('\n');

console.log(hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])) // true
console.log(hasDuplicates([1,2,3,4,5,6])) // false
console.log(hasDuplicates([])) // false
console.log('\n');

console.log(countPairs([8,2,6,4,10,0],10)) // 3
console.log(countPairs([8,2],10)) // 1
console.log(countPairs([1,2],10)) // 0
console.log(countPairs([1,2,3,4,5],10)) // 0
console.log(countPairs([],10)) // 0
console.log(countPairs([5,4,-10,6,-20,16],-4)) // 2
console.log(countPairs([0,-4],-4)) // 1