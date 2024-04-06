import { useContext } from "react"
import { TodoCounts as Counts } from "../components"
import { TodoContext } from "../context"

const TodoCounts = () => {
  const { numberOfTask, numberOfCompletedTask, completionPercentage } = useContext(TodoContext)

  return <Counts
    numOfTask={numberOfTask}
    numOfCompletedTask={numberOfCompletedTask}
    completionPercentage={completionPercentage}
  />
}

export default TodoCounts