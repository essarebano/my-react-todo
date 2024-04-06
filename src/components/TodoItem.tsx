import { formatDate } from "../utils/helper"
import { Todo } from "../utils/types"

export interface TodoItemProps extends Todo {
  onMarkAsCompleted: (id: string, isCompleted: boolean) => void
  onRemoveTodo: (id: string) => void
  onEditTaskTitle: (id: string, title: string) => void
  onToggleEdit: () => void
  showEdit: boolean
}

const TodoItem = ({
  id,
  title,
  text,
  isCompleted,
  updatedAt,
  showEdit,
  onToggleEdit,
  onEditTaskTitle,
  onMarkAsCompleted,
  onRemoveTodo
}: TodoItemProps) => {

  function handleMarkAsCompleted() {
    onMarkAsCompleted(id, isCompleted)
  }

  function handleRemoveTodo() {
    onRemoveTodo(id)
  }

  function handleShowEdit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onToggleEdit()
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const title = ((e.target as HTMLFormElement).elements.namedItem('task-title') as HTMLInputElement).value

    onEditTaskTitle(id, title)
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
      <div >
        <form onSubmit={handleOnSubmit} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
          <input
            type='checkbox'
            id='isCompleted'
            onChange={handleMarkAsCompleted}
            checked={isCompleted}
          />
          {showEdit
            ? (
              <input
                type="text"
                id='task-title'
                defaultValue={title}
              />
            ) : (
              <h1 style={{
                paddingLeft: '2px',
                textDecoration: isCompleted ? 'line-through' : ''
              }}>{title}</h1>
            )}
          <div style={{ display: 'flex'}}>
            {showEdit ?
              <button type='submit'>Update</button> :
              <button onClick={handleShowEdit} disabled={isCompleted}>Edit</button>}
            <button onClick={handleRemoveTodo}>Remove</button>
          </div>
        </form>
      </div>
      <span style={{ fontSize: '10px', marginTop: '6px' }}>{updatedAtFormatted}</span>
    </li>
  )
}

export default TodoItem