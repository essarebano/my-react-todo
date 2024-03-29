import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoForm as Form } from "../components"

const TodoForm = () => {
  const { addTodo, markAll, removeAll } = useContext(TodoContext)

  function onAddTodo(text?: string) {
    addTodo(text)
  }

  function onMarkAllAsCompleted() {
    markAll()
  }

  function onRemoveAll() {
    removeAll()
  }

  return <Form
    onSubmit={onAddTodo}
    onMarkAllAsCompleted={onMarkAllAsCompleted}
    onRemoveAll={onRemoveAll}
  />
}

export default TodoForm