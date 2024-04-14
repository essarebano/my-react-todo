import { useContext } from "react"
import { TodoActions as Actions } from "../components"
import { TodoContext } from "../context"

const TodoActions = () => {
  const {
    todoList,
    removeAll,
    markAll,
    filterByStatus,
    resetFilters,
    isFilteredByStatus
  } = useContext(TodoContext)
  return (
    <Actions
      disabled={todoList.length === 0}
      onMarkAllAsCompleted={markAll}
      onRemoveAll={removeAll}
      onFilterByStatus={filterByStatus}
      onResetFilter={resetFilters}
      isFilteredByStatus={isFilteredByStatus}
    />
  )
}

export default TodoActions