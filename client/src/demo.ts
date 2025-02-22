let message1 = "Hello";
let message2: string = "Hello";
let message3: string | number = "Hello";

let isComplete: boolean = false;

message1 = "1";
message2 = " World";
message3 = 101;
message3 = "Welcome...";

type Todo = {
    id: number
    title: string
    completed: boolean
}

let todos: Todo[] = [];

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: todos.length + 1,
        title,
        completed: false
    }

    todos.push(newTodo);
    return newTodo;
}

function toggleTodo(id: number): void {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed
    }
}

addTodo("Build API");
addTodo("Publish app");
toggleTodo(1);

console.log(todos);




