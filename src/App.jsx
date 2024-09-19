import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-center bg-primary text-white p-3'>Employees</h2>
    <Home/>
    </>
      
  )
}

export default App
