export enum TodoStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  DONE = 'done'
}

export type TodoStatusType = TodoStatus.PENDING | TodoStatus.IN_PROGRESS | TodoStatus.DONE

export type Todo = {
  id: string
  title: string
  description: string
  status: TodoStatusType
  isCompleted: boolean
  createdAt: string
  updatedAt: string
}