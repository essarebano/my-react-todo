import { useContext } from "react"
import { TodoActions as Actions } from "../components"
import { TodoContext } from "../context"

const TodoActions = () => {
  const { todoList, removeAll, markAll, filterByStatus} = useContext(TodoContext)
  return (
    <Actions
      disabled={todoList.length === 0}
      onMarkAllAsCompleted={markAll}
      onRemoveAll={removeAll}
      onFilterByStatus={filterByStatus}
    />
  )
}

export default TodoActions