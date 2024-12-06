import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(5);
  function addValue(){
    console.log(counter)
    if(counter>9){
      return;
    }
    setCounter(counter+1); //asynchronous nature of React's state updates
  }
  function removeValue(){
    console.log(counter)
    if(counter<1){
      return;
    }
    setCounter(counter-1);
    console.log(counter);
  }
  return (
    <>
      <h1>count is {counter}</h1>
      <button onClick={addValue}>Add value</button><br/>
      <button onClick={removeValue}>removeValue</button>
    </>
  )
}

export default App
