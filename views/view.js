class View {
    static showError(error) {
        console.log(`ERROR:`)
        console.log(error)
    }

    static showTodos(todos) {
        console.log(todos)
    }

    static showTodo(todo) {
        console.log(todo)
    }

    static showDeletedTodo(todo) {
        console.log(`Todo with id: ${todo.id} has been deleted`)
    }
}

module.exports = View