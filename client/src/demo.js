var message1 = "Hello";
var message2 = "Hello";
var message3 = "Hello";
var isComplete = false;
message1 = "1";
message2 = " World";
message3 = 101;
message3 = "Welcome...";
var todos = [];
function addTodo(title) {
    var newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}
function toggleTodo(id) {
    var todo = todos.find(function (todo) { return todo.id === id; });
    if (todo) {
        todo.completed = !todo.completed;
    }
}
addTodo("Build API");
addTodo("Publish app");
toggleTodo(1);
console.log(todos);
