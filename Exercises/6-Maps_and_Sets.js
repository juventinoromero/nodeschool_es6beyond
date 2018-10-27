class MessageBoard {

  /*
  In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1.
  */

  constructor() {

  }

  /*
  Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).
  */

  addMessage() {

  }

  /*
  Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.
  */

  findMessageById() {

  }

  /*
  Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.
  */

  findMessageByValue() {

  }

  /*
  Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.
  */

  removeMessage() {

  }

  /*
  Add a method called numberOfMessages which returns the number of keys in the messages map
  */

  numberOfMessages() {

  }

  /*
  Add a method called messagesToArray which returns an array of all of the values in the messages map
  */

  messagesToArray() {

  }
}

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array
*/

function uniqueValues() {

}

/*

Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.
*/

function hasDuplicates() {

}

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.
*/

function countPairs() {

}


// Results
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