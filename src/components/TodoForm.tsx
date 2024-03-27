export interface TodoFormProps {
  onSubmit: (task: string) => void
}

const TodoForm = ({ onSubmit }: TodoFormProps) => {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const task = ((e.target as HTMLFormElement).elements.namedItem('task') as HTMLInputElement).value

    onSubmit(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id='task' type='text' />
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm