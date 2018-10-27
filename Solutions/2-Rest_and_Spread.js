// spread
function smallestValue(...args) {
	return Math.min(...args)
}


// placeInMiddle
function placeInMiddle(arr, vals) {
	let mid = Math.floor(arr.length / 2)
	arr.splice(mid, 0, ...vals)
	return arr;
}


// rest
function joinArrays(...args) {
	return args.reduce((acc, next) => acc.concat(next), [])
}


// sumEvenArgs
function sumEvenArgs(...args) {
	return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0)
}


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