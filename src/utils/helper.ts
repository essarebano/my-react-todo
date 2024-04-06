import { COLORS } from "./constants";
import { TodoStatus, TodoStatusType } from "./types";

export function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);

  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
}

export function setStatusColorVariant(status: TodoStatusType) {
  switch (status) {
    case TodoStatus.IN_PROGRESS: {
      return COLORS.BLUE
    }
    case TodoStatus.DONE: {
      return COLORS.GREEN
    }
    case TodoStatus.PENDING:
    default: {
      return COLORS.GRAY
    }
  }
}

export function computePercentage(partialValue: number = 0, totalValue: number = 0) {
  const result  = (totalValue) / (partialValue) * 100
  return result ? result.toFixed(2) : 0;
}