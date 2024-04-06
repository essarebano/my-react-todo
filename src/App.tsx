import './App.css'
import { TodoContextProvider } from './context'
import { TodoList, TodoAddForm } from './container'

function App() {
  return (
    <>
      <TodoContextProvider>
        <TodoAddForm />
        <TodoList />
      </TodoContextProvider>
    </>
  )
}

export default App
