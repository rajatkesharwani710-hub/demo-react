import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div> 
    <h1> welcome</h1>
    <h1> dino</h1>
    <Employee></Employee>
  </div>
  )
}

function Employee()
{
  return(
    <h1>this is Employee component </h1>
  )
}

export default App