import { TODO_STATUS } from "../utils"
import { TodoStatusType } from "../utils/types"

export interface TodoActionsProps {
  onMarkAllAsCompleted: () => void
  onRemoveAll: () => void
  onFilterByStatus: (status: TodoStatusType) => void
  onResetFilter: () => void
  disabled: boolean
  isFilteredByStatus: boolean
}

const TodoActions = ({
  onMarkAllAsCompleted,
  onRemoveAll,
  onFilterByStatus,
  onResetFilter,
  disabled,
  isFilteredByStatus
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

  function handleOnResetFilter(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onResetFilter()
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
      <div style={{ marginTop: '8px'}}>
        <button
          onClick={handleOnResetFilter}
          disabled={!isFilteredByStatus || disabled}
        >Reset Filter</button>
      </div>
    </div>
  )
}

export default TodoActions