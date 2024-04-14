import { TodoAddForm, TodoCounts, TodoList, TodoActions } from "../container"
import { TodoContextProvider } from "../context"

const Todo = () => {
  return (
    <div>
      <TodoContextProvider>
        <TodoCounts />
        <TodoAddForm />
        <TodoActions />
        <TodoList />
      </TodoContextProvider>
    </div>
  )
}

export default Todo