import { useContext } from "react"
import { TodoContext } from "../context"
import { TodoForm as Form } from "../components"

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext)

  function onAddTodo(text?: string) {
    addTodo(text)
  }

  return <Form onSubmit={onAddTodo}/>
}

export default TodoForm