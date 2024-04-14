import { useContext } from "react"
import { TodoList as List } from "../components"
import { TodoContext } from "../context"
import { TodoItem as ListItem } from "../container"

const TodoList = () => {
  const { todoList, filteredTodoList } = useContext(TodoContext)

  if (filteredTodoList.length) {
    return <List todoList={filteredTodoList}>
      {filteredTodoList.map(todo => <ListItem key={`filtered-todo-item_${todo.id}`} {...todo}/>)}
    </List>
  }

  return <List
    todoList={todoList}
  >
    {todoList.map(todo => <ListItem key={`todo-item_${todo.id}`} {...todo} />)}
  </List>
}

export default TodoList