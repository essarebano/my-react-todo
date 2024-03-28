import { useContext } from "react";
import { TodoItem as ListItem } from "../components";
import { Todo } from "../utils/types";
import { TodoContext } from "../context";

export interface TodoItemProps extends Todo {}

const TodoItem = (props: TodoItemProps) => {
  const { editTodo, removeTodo } = useContext(TodoContext)

  function onMarkAsCompleted(id: string, isCompleted?: boolean) {
    editTodo(id, 'isCompleted', !isCompleted)
  }

  function onRemoveTodo(id: string) {
    removeTodo(id)
  }

  return <ListItem
    {...props}
    onMarkAsCompleted={onMarkAsCompleted}
    onRemoveTodo={onRemoveTodo}
  />
}

export default TodoItem