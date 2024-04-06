export interface TodoFormProps {
  onSubmit: (task: string) => void
  onMarkAllAsCompleted: () => void
  onRemoveAll: () => void
}

const TodoForm = ({
  onSubmit,
  onMarkAllAsCompleted,
  onRemoveAll
}: TodoFormProps) => {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const task = ((e.target as HTMLFormElement).elements.namedItem('task-title') as HTMLInputElement).value

    onSubmit(task)
  }

  function handleOnMarkAllAsCompleted(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onMarkAllAsCompleted()
  }

  function handleOnRemoveAll(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onRemoveAll()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id='task-title' type='text' required/>
      <button type='submit'>Add</button>
      <div>
        <button onClick={handleOnMarkAllAsCompleted}>Mark All As Completed</button>
        <button onClick={handleOnRemoveAll}>Remove All</button>
      </div>
    </form>
  )
}

export default TodoForm