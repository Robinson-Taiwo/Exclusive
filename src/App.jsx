import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import AppRoutes from './Components/AppRoutes'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ToastContainer className="toast-message" ></ToastContainer>
      <AppRoutes />
    </div>
  )
}

export default App
