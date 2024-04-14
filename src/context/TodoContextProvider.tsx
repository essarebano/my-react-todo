import { useState } from "react"
import { TodoContext } from "./TodoContext"
import { Todo, TodoStatus, TodoStatusType } from "../utils/types"
import { v4 } from "uuid"
import { TEXT } from "../utils/constants"
import { computePercentage } from "../utils/helper"

interface TodoContextProvider {
  children: React.ReactNode
}

const TodoContextProvider = ({ children }: TodoContextProvider) => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [filteredTodoList, setFilteredTodoList] = useState<Todo[]>([])
  const [isFilteredByStatus, setIsFilteredByStatus] = useState<boolean>(false)

  function addTodo(title: string = '') {
    const newTodo: Todo = {
      id: v4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title,
      description: TEXT.DEFAULT,
      status: TodoStatus.PENDING,
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

  function filterByStatus(status: TodoStatusType) {
    const updatedTodoList = todoList.filter(todo => todo.status === status)

    setFilteredTodoList(updatedTodoList)
    setIsFilteredByStatus(true)
  }

  function resetFilters() {
    setIsFilteredByStatus(false)
  }

  const numberOfTask = todoList.length ?? 0
  const numberOfCompletedTask = todoList.filter(todo => todo.isCompleted === true).length ?? 0
  const completionPercentage = Number(computePercentage(numberOfTask, numberOfCompletedTask))

  return (
    <TodoContext.Provider
      value={{
        todoList,
        filteredTodoList,
        isFilteredByStatus,
        numberOfTask,
        numberOfCompletedTask,
        completionPercentage,
        addTodo,
        editTodo,
        removeTodo,
        markAll,
        removeAll,
        filterByStatus,
        resetFilters
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider