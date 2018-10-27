/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.
*/

function smallestValue() {

}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.
*/

function placeInMiddle(arr, vals) {

}

/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together
*/

function joinArrays() {

}

/* 
Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.
*/

function sumEvenArgs() {

}

/**
 * Example results with expected outputs
 * node 2-Rest_and_Spread.js
 */

// spread
console.log('smallestValue results')
console.log(smallestValue(4,1,12,0)) // 0
console.log(smallestValue(5,4,1,121)) // 1
console.log(smallestValue(4,2)) // 2
console.log(smallestValue(99,12321,12,2)) // 2
console.log('\n')

// placeInMiddle
console.log('placeInMiddle results')
console.log(placeInMiddle([1,2,6,7],[3,4,5])) // [1,2,3,4,5,6,7]
console.log(placeInMiddle([1],[3,4,5])) // [3,4,5,1]
console.log(placeInMiddle([1,6],[2,3,4,5])) // [1,2,3,4,5,6]
console.log(placeInMiddle([],[2,3,4,5])) // [2,3,4,5]
console.log('\n')

// rest
console.log('joinArrays results')
console.log(joinArrays([1],[2],[3])) // [1,2,3]
console.log(joinArrays([1],[2],[3],[1],[2],[3])) // [1,2,3,1,2,3]
console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])) // [1,2,3,4,5,6,7,8,9]
console.log(joinArrays([1],[3],[0],[7])) // [1,3,0,7]
console.log('\n')

// sumEvenArgs
console.log('sumEvenArgs results')
console.log(sumEvenArgs(1,2,3,4)) // 6
console.log(sumEvenArgs(1,2,6)) // 8
console.log(sumEvenArgs(1,2)) // 2
console.log('\n')