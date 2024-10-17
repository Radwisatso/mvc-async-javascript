const Model = require("../models/model");
const View = require("../views/view");

// Ini controller
class Controller {
    static async listTodo() {
        try {
            let result = await Model.listTodo()
            View.showTodos(result)
        } catch (error) {
            View.showError(error)
        }
    }

    static async addTodo(todoName) {
        try {
            let result = await Model.addTodo(todoName)
            View.showTodo(result)
        } catch (error) {
            View.showError(error)
        }
    }

    static async getTodoById(id) {
        try {
            const todo = await Model.getTodoById(id)
            View.showTodo(todo)
        } catch (error) {
            View.showError(error)
        }
    }

    static async deleteTodo(id) {
        try {
            const todo = await Model.deleteTodo(id)
            View.showDeletedTodo(todo)
        } catch (error) {
            View.showError(error)
        }
    }

    static async updateTodo(id, name) {
        try {
            const updatedTodo = await Model.updateTodo(id, name)
            View.showTodo(updatedTodo)
        } catch (error) {
            View.showError(error)
        }
    }
}

module.exports = Controller;