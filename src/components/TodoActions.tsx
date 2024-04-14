import { TODO_STATUS } from "../utils"
import { TodoStatusType } from "../utils/types"

export interface TodoActionsProps {
  onMarkAllAsCompleted: () => void
  onRemoveAll: () => void
  onFilterByStatus: (status: TodoStatusType) => void
  disabled: boolean
}

const TodoActions = ({
  onMarkAllAsCompleted,
  onRemoveAll,
  onFilterByStatus,
  disabled
}: TodoActionsProps) => {

  function handleOnMarkAllAsCompleted(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onMarkAllAsCompleted()
  }

  function handleOnRemoveAll(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onRemoveAll()
  }

  function handleOnFilterByStatus(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()
    const status = e.target.value as TodoStatusType
    onFilterByStatus(status)
  }

  return (
    <div>
      <div style={{ marginTop: '8px'}}>
        <button
          onClick={handleOnMarkAllAsCompleted}
          disabled={disabled}
        >Mark All As Completed</button>
        <button
          onClick={handleOnRemoveAll}
          disabled={disabled}
        >Remove All</button>
      </div>
      <div style={{ marginTop: '8px'}}>
        <label htmlFor="status" >Filter by status: </label>
        <select
          id='status'
          style={{ textTransform: 'capitalize' }}
          onChange={handleOnFilterByStatus}
          disabled={disabled}
        >
          {TODO_STATUS.map(status => <option
            style={{ textTransform: 'capitalize' }}
            value={status}>{status}</option>)}
        </select>
      </div>
    </div>
  )
}

export default TodoActions