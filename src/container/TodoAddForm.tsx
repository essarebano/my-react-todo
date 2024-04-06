import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoAddForm as AddForm } from "../components"

const TodoAddForm = () => {
  const { addTodo, markAll, removeAll } = useContext(TodoContext)

  function onAddTodo(title?: string) {
    addTodo(title)
  }

  function onMarkAllAsCompleted() {
    markAll()
  }

  function onRemoveAll() {
    removeAll()
  }

  return <AddForm
    onSubmit={onAddTodo}
    onMarkAllAsCompleted={onMarkAllAsCompleted}
    onRemoveAll={onRemoveAll}
  />
}

export default TodoAddForm