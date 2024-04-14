import { useContext } from "react"
import { TodoActions as Actions } from "../components"
import { TodoContext } from "../context"

const TodoActions = () => {
  const { todoList, removeAll, markAll} = useContext(TodoContext)
  return (
    <Actions
      disabled={todoList.length === 0}
      onMarkAllAsCompleted={markAll}
      onRemoveAll={removeAll}
    />
  )
}

export default TodoActions