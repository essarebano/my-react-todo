import { useContext, useState } from "react";
import { TodoItem as ListItem } from "../components";
import { Todo } from "../utils/types";
import { TodoContext } from "../context";

export interface TodoItemProps extends Todo {}

const TodoItem = (props: TodoItemProps) => {
  const { editTodo, removeTodo } = useContext(TodoContext)
  const [showEdit, setShowEdit] = useState<boolean>(false)

  function onMarkAsCompleted(id: string, isCompleted?: boolean) {
    editTodo(id, 'isCompleted', !isCompleted)
  }

  function onRemoveTodo(id: string) {
    removeTodo(id)
  }

  function onToggleEdit() {
    setShowEdit(!showEdit)
  }

  function onEditTask(id: string, task: string) {
    editTodo(id, 'text', task)
    onToggleEdit()
  }

  return <ListItem
    {...props}
    showEdit={showEdit}
    onEditTask={onEditTask}
    onMarkAsCompleted={onMarkAsCompleted}
    onRemoveTodo={onRemoveTodo}
    onToggleEdit={onToggleEdit}
  />
}

export default TodoItem