import { makeAutoObservable } from "mobx"

class Todo {
    todos = [
        {id:1, title:'Сходи в магазин', commpleted: false},
        {id:2, title:'Посмотри в', commpleted: false},
        {id:3, title:'поставь лайк', commpleted: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)


    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)


    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, commpleted: !todo.commpleted} : todo)


    }

}

export default new Todo()