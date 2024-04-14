import { TodoStatus } from "./types"

export const COLORS = {
  GREEN: "#50c24e",
  BLUE: "#0b90c4",
  GRAY: "#82868b"
}

export const TEXT = {
  LOREM_IPSUM: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  DEFAULT: 'Please update task description.'
}

export const TODO_STATUS = [
  TodoStatus.PENDING,
  TodoStatus.IN_PROGRESS,
  TodoStatus.DONE
]