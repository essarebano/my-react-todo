import { useState } from "react"
import { TodoContext } from "./TodoContext"
import { Todo } from "../utils/types"
import { v4 } from "uuid"

interface TodoContextProvider {
  children: React.ReactNode
}

const TodoContextProvider = ({ children }: TodoContextProvider) => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  function addTodo(title: string = '') {
    const newTodo: Todo = {
      id: v4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title,
      text: '',
      isCompleted: false
    }

    setTodoList([...todoList, newTodo])
  }

  function editTodo<T extends keyof Todo>(id: string, key: T, value: Todo[T]) {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          [key]: value,
          updatedAt: new Date().toISOString()
        }
      }

      return todo
    })

    setTodoList(updatedTodoList)
  }

  function removeTodo(id: string) {
    const updatedTodoList = todoList.filter(todo => todo.id !== id)

    setTodoList(updatedTodoList)
  }

  function markAll() {
    const updatedTodoList = todoList.map(todo => ({ ...todo, isCompleted: !todo.isCompleted }))

    setTodoList(updatedTodoList)
  }

  function removeAll() {
    setTodoList([])
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        editTodo,
        removeTodo,
        markAll,
        removeAll
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider