import { Todo } from "../utils/types"

export interface TodoListProps {
  todoList: Todo[],
  children: React.ReactNode
}

const TodoList = ({
  todoList,
  children
}: TodoListProps) => {
  if (todoList.length === 0) {
    return (<p>No Todo</p>)
  }

  return (
    <div>
      <ul style={{ paddingLeft: 0}}>
        {children}
      </ul>
    </div>
  )
}

export default TodoList