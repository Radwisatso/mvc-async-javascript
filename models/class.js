class Todo {
    #isFinished
    constructor(id, name, isFinished) {
        this.id = id
        this.name = name
        this.#isFinished = isFinished
    }

    get isFinished() {
        return this.#isFinished
    }

    set isFinished(value) {
        this.#isFinished = value
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            isFinished: this.#isFinished
        }
    }
}

module.exports = Todo