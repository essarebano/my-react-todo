export interface TodoActionsProps {
  onMarkAllAsCompleted: () => void
  onRemoveAll: () => void
  disabled: boolean
}

const TodoActions = ({
  onMarkAllAsCompleted,
  onRemoveAll,
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

  return (
    <div>
      <button
        onClick={handleOnMarkAllAsCompleted}
        disabled={disabled}
      >Mark All As Completed</button>
      <button
        onClick={handleOnRemoveAll}
        disabled={disabled}
      >Remove All</button>
    </div>
  )
}

export default TodoActions