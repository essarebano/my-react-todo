import './App.css'
import { TodoContextProvider } from './context'
import { TodoList, TodoForm } from './container'

function App() {
  return (
    <>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </>
  )
}

export default App
