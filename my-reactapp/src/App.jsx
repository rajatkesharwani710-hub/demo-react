import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function fun(){
    alert ("you click on button")
  }  
  const fruit=(name,AP,BN)=> {
    alert (name,AP,BN)
  }
  let data ="Demo"
  function updata(){
    data = "Example"
    alert (data);
  }
 
  return(
    <>

<h1> example of arrow function</h1>
<button onClick={fun}>click on button</button>
<button onClick={()=>fruit("first parameter")}>arrow fruit button</button>
<button onClick={()=>fruit("youclick on apple")}>APPLE</button>
<button onClick={()=>fruit("you click on banana")}>BANANA</button>
<h3> state in react</h3>
<h1> {data}</h1>
<button onClick={updata}>click to change value</button>
</>
  )
}
export default App
