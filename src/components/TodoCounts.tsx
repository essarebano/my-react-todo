interface TodoCountsProps {
  numOfTask: number
  numOfCompletedTask: number
  completionPercentage: number
}

const TodoCounts = ({
  numOfTask,
  numOfCompletedTask,
  completionPercentage
}: TodoCountsProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center"}}>
        <h2>{numOfTask}</h2>
        <p>Task</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center"}}>
        <h2>{numOfCompletedTask} / {numOfTask}</h2>
        <p>Completed</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center"}}>
        <h2>{completionPercentage} %</h2>
        <p>Completion</p>
      </div>
    </div>
  )
}

export default TodoCounts