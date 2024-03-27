import { createContext } from "react";
import { Todo } from "../utils/types";

export interface TodoContextObject {
  todoList: Todo[]
  addTodo: (text?: string) => void
  editTodo: <T extends keyof Todo>(taskId: string, key: T, value: Todo[T]) => void
  removeTodo: (taskId: string) => void
}

export const TodoContext = createContext<TodoContextObject>({
  todoList: [],
  addTodo: function (): void {
    throw new Error("Function not implemented.");
  },
  editTodo: function (): void {
    throw new Error("Function not implemented.");
  },
  removeTodo: function (): void {
    throw new Error("Function not implemented.");
  }
})