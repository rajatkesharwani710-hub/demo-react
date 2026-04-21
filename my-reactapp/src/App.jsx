import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//1.
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>

//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default App;
//2.
// function App() {
//   const [showText, setShowText] = useState(false);

//   const toggleText = () => {
//     setShowText(!showText);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Show / Hide Text</h1>

//       <button onClick={toggleText}>
//         {showText ? "Hide Text" : "Show Text"}
//       </button>

//       {showText && <p>This is the hidden text 👀</p>}
//     </div>
//   );
// }

// export default App;
//4.

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const style = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px"
  };

  return (
    <div style={style}>
      <h1>Theme Toggle App</h1>

      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <p>This is some sample text</p>
    </div>
  );
}

export default App;
// function App() {
//   function fun(){
//     alert ("you click on button")
//   }  
//   const fruit=(name,AP,BN)=> {
//     alert (name,AP,BN)
//   }
//   let data ="Demo"
//   function updata(){
//     data = "Example"
//     alert (data);
//   }
 
//   return(
//     <>

// <h1> example of arrow function</h1>
// <button onClick={fun}>click on button</button>
// <button onClick={()=>fruit("first parameter")}>arrow fruit button</button>
// <button onClick={()=>fruit("youclick on apple")}>APPLE</button>
// <button onClick={()=>fruit("you click on banana")}>BANANA</button>
// <h3> state in react</h3>
// <h1> {data}</h1>
// <button onClick={updata}>click to change value</button>
// </>
//   )
// }
//export default App
