import { useContext, useState } from "react";
import { TodoItem as ListItem } from "../components";
import { Todo, TodoStatusType } from "../utils/types";
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

  function onEditTitle(id: string, task: string) {
    editTodo(id, 'title', task)
  }

  function onEditStatus(id: string, status: TodoStatusType) {
    editTodo(id, 'status', status)
  }

  return <ListItem
    {...props}
    showEdit={showEdit}
    onEditTitle={onEditTitle}
    onEditStatus={onEditStatus}
    onMarkAsCompleted={onMarkAsCompleted}
    onRemoveTodo={onRemoveTodo}
    onToggleEdit={onToggleEdit}
  />
}

export default TodoItem