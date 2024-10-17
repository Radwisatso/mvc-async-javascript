const Controller = require("./controllers/controller")

const arguments = process.argv.slice(2)

const command = arguments[0]

switch (command) {
    case 'listTodo': {
        Controller.listTodo()
        break      
    }
    case 'addTodo': {
        let todoName = arguments[1]
        Controller.addTodo(todoName)
        break
    }
    case 'getTodoById': {
        let id = +arguments[1] // 1, 2, 3, dst
        Controller.getTodoById(id)
        break
    }
    case 'deleteTodo': {
        let id = +arguments[1] // 1, 2, 3, dst
        Controller.deleteTodo(id)
        break;
    }
    case 'updateTodo': {
        let id = +arguments[1] // 1, 2, 3, dst
        let name = arguments[2]
        Controller.updateTodo(id, name)
        break

    }

}