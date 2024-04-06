import './App.css'
import { TodoContextProvider } from './context'
import { TodoList, TodoAddForm, TodoCounts } from './container'

function App() {
  return (
    <>
      <TodoContextProvider>
        <TodoCounts />
        <TodoAddForm />
        <TodoList />
      </TodoContextProvider>
    </>
  )
}

export default App
