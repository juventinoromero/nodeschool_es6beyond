/*
1. Write a function called getCompletedTodos, which accepts a variable number of arguments. You should then make an AJAX call to the jsonplaceholder API to get the ToDos of with the IDs provided as arguments. The function should return a promise, which when resolved, logs and returns an array with the completed ToDos.

Hint - Try to use Promise.all to solve this and remember that the axios.get method returns a promise.

Hint - To get the ToDo with ID = 1 you must make a request with axios:
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
*/
const axios = require('axios');

function getCompletedTodos(...todosIDs) {
    
}

getCompletedTodos(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);  // 4, 8, 10, 11, 12, 14, 15