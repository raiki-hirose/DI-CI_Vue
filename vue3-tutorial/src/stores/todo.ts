import { defineStore } from 'pinia'

interface Todo {
  id: number
  title: string
  body: string
  completed: boolean
}

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    currentId: 1,
    todoList: [] as Todo[],
  }),
  getters: {
    uncompletedTodoList: (state) => state.todoList.filter(todo => todo.completed === false)
  },
  actions: {
    incrementId() {
      this.currentId++
    },
    addTodo(todo: Todo) {
      this.todoList.push(todo)
    },
    deleteTodo(id: number) {
      this.todoList = this.todoList.filter(todo => todo.id !== id)
    },
  },
  persist: {
    storage: localStorage,
  },
})
