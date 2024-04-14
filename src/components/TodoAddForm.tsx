export interface TodoAddFormProps {
  onSubmit: (task: string) => void
}

const TodoAddForm = ({
  onSubmit
}: TodoAddFormProps) => {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const task = ((e.target as HTMLFormElement).elements.namedItem('task-title') as HTMLInputElement).value

    onSubmit(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id='task-title' type='text' required placeholder="What will you do today?"/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoAddForm