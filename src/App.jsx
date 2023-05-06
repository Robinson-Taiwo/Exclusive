import { useState } from 'react'
import './App.css'
import AppRoutes from './Components/AppRoutes'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
