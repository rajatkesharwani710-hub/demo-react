import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name="JOHN";
  let x=10;
  let y=20;
  function name1(){
    return"My name is Rajat";
  }
  function sum(a,b,op){
    if(op=='+'){
      return a+b;
    }
    else if(op=='-'){
      return a-b;
    }

  return (
  <div> 
  <h1>user variable with jsx</h1>
  <h3>Value of variable is {name}</h3>
  <h3>{x+y}</h3>
  <h3>Use of function withJSX</h3>
  <h3>{name1()}</h3>
  <h3>{sum(20,10,'-')}</h3>
  </div>
  )
}
}
export default App
