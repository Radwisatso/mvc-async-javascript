const Todo = require('./class')
const fs = require('fs').promises // Jangan sampai lupa .promises

class Model {
    static async listTodo() {
        try {
            const data = await fs.readFile('./data/todos.json', 'utf-8')
            const todos = JSON.parse(data)
            const result = todos.map(todo => {
                return new Todo(todo.id, todo['name'])
            })
            return result
        } catch (error) {
            throw error          
        }
    }

    static async addTodo(todoName) {
        try {
            const todos = await this.listTodo()

            let newId // = todos.length === 0 ? 1 : todos.at(-1).id + 1 // (ternary operator)
            if (todos.length === 0) {
                newId = 1
            } else {
                newId = todos.at(-1).id + 1
            }

            const newTodo = new Todo(newId, todoName)
            todos.push(newTodo)
            
            // save file
            const stringified = JSON.stringify(todos, null, 2)
            await fs.writeFile('./data/todos.json', stringified)
            // ==========

            return newTodo
        } catch (error) {
            throw error
        }
    }

    static async getTodoById(id) {
        try {
            const todos = await this.listTodo()
            const foundTodo = todos.find(todo => todo.id === id)
            if (!foundTodo) {
               throw "Todo not found"
            }
            return foundTodo;
        } catch (error) {
            throw error
        }
    }

    static async deleteTodo(id) {
        try {
            // console.log(id)   
            const todos = await this.listTodo()

            const foundTodo = todos.find(todo => todo.id === id) // todo yang dikembalikan
            if (!foundTodo) {
                throw 'Todo not found'
            }
            
            const filteredTodos = todos.filter(todo => todo.id !== id) // todos yang ingin ditimpa ke JSON

            // override file json
            const stringified = JSON.stringify(filteredTodos, null, 2)
            await fs.writeFile('./data/todos.json', stringified)
            // ==========

            return foundTodo;
        } catch (error) {
            throw error
        }
    }

    static async updateTodo(id, name) {
        try {
            // console.log(id, name)

            const todos = await this.listTodo()
            const foundTodo = todos.find(todo => todo.id === id)
            foundTodo.name = name

            // override file json
            const stringified = JSON.stringify(todos, null, 2)
            await fs.writeFile('./data/todos.json', stringified)
            // ==========
            return foundTodo
        } catch (error) {
            throw error
        }
    }
}

module.exports = Model