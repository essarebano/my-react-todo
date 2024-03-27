import { formatDate } from "../utils/helper"
import { Todo } from "../utils/types"

export interface TodoItemProps extends Todo {
  onMarkAsCompleted: (id: string, isCompleted: boolean) => void
  onRemoveTodo: (id: string) => void
}

const TodoItem = ({
  id,
  text,
  isCompleted,
  updatedAt,
  onMarkAsCompleted,
  onRemoveTodo
}: TodoItemProps) => {

  function handleMarkAsCompleted() {
    onMarkAsCompleted(id, !isCompleted)
  }

  function handleRemoveTodo() {
    onRemoveTodo(id)
  }

  const updatedAtFormatted = formatDate(updatedAt)

  return (
    <li style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <span>{text}</span>
        <span>{updatedAtFormatted}</span>
      </div>
      <div>
        <button onClick={handleMarkAsCompleted}>Mark As Completed</button>
        <button onClick={handleRemoveTodo}>Remove</button>
      </div>
    </li>
  )
}

export default TodoItem