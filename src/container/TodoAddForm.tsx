import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoAddForm as AddForm } from "../components"

const TodoAddForm = () => {
  const { addTodo } = useContext(TodoContext)

  function onAddTodo(title?: string) {
    addTodo(title)
  }

  return <AddForm
    onSubmit={onAddTodo}
  />
}

export default TodoAddForm