const axios = require('axios');

async function getCompletedTodos(...todosIDs) {
	let baseUrl = "https://jsonplaceholder.typicode.com/todos/";
	let urls = todosIDs.map(todoID => axios.get(baseUrl + todoID));
	let results = await Promise.all(urls).then(function (data) {
		let completedTodos = data.map(todo => todo.data).filter(todo => todo.completed == true);
		return completedTodos;
	})
	console.log(results);
	return results;
}

getCompletedTodos(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);