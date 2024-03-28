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
    onMarkAsCompleted(id, isCompleted)
  }

  function handleRemoveTodo() {
    onRemoveTodo(id)
  }

  const updatedAtFormatted = formatDate(updatedAt)

  return (
    <li style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
          <input type='checkbox' onChange={handleMarkAsCompleted} checked={isCompleted}/>
        <span style={{
            fontSize: '18px',
            paddingLeft: '2px',
            textDecoration: isCompleted ? 'line-through' : ''
          }}>{text}</span>
          <button onClick={handleRemoveTodo}>Remove</button>
      </div>
      <span style={{ fontSize: '10px', marginTop: '6px' }}>{updatedAtFormatted}</span>
    </li>
  )
}

export default TodoItem