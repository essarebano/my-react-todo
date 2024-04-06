import { formatDate, setStatusColorVariant } from "../utils/helper"
import { Todo, TodoStatus, TodoStatusType } from "../utils/types"

export interface TodoItemProps extends Todo {
  onMarkAsCompleted: (id: string, isCompleted: boolean) => void
  onRemoveTodo: (id: string) => void
  onEditTitle: (id: string, title: string) => void
  onEditStatus: (id: string,  status: TodoStatusType) => void
  onToggleEdit: () => void
  showEdit: boolean
}

const TodoItem = ({
  id,
  title,
  description,
  isCompleted,
  status,
  updatedAt,
  showEdit,
  onToggleEdit,
  onEditTitle,
  onEditStatus,
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

  function handleStatusOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()
    const status = e.target.value as TodoStatusType
    onEditStatus(id, status)
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const title = ((e.target as HTMLFormElement).elements.namedItem('task-title') as HTMLInputElement).value

    onEditTitle(id, title)
    onToggleEdit()
  }

  const updatedAtFormatted = formatDate(updatedAt)
  const todoStatusOption = [TodoStatus.PENDING, TodoStatus.IN_PROGRESS, TodoStatus.DONE]

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
          <div style={{ display: 'flex', flexDirection: 'column'}}>
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
          <p style={{
            paddingLeft: '2px',
            textDecoration: isCompleted ? 'line-through' : ''
          }}>{description}</p>
          </div>
          {showEdit ? (
            <select
              style={{ textTransform: 'capitalize' }}
              defaultValue={status}
              onChange={handleStatusOnChange}
            >
              {todoStatusOption.map(status => <option
                style={{ textTransform: 'capitalize' }}
                value={status}>{status}</option>)}
            </select>
          ): (
              <p style={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                color: setStatusColorVariant(status)
              }}>{status}</p>
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