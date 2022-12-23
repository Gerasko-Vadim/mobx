import { makeAutoObservable } from "mobx"

export type TodoType = {
    id: number,
    text: string,
    done: boolean
}

class Todo {
 todos: Array<TodoType> = []
    constructor() {
        makeAutoObservable(this)
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(item => item.id !== id)
    }

    doneTodo(id: number) {
        this.todos = this.todos.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    done: !item.done
                }
            }
            return { ...item }
        })
    }

    changeText(id: number, text: string) {
        this.todos = this.todos.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    text: text
                }
            }
            return { ...item }
        })
    }

    addTodo(text: string) {
        if(!text) return
        this.todos.push({
            id: this.todos.length +1,
            text: text,
            done: false
        })
        console.log(this.todos)
        console.log(text)
    }
}

export default new Todo();