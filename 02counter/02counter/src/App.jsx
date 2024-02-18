import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter+= 1;
    console.log(counter);
    if(counter > 20){
      counter = 20;
      setCounter(counter);
    }
    else{
      setCounter(counter);
    }
    
  }

  const removeValue = () => {
    counter-= 1;
    console.log(counter);
    if(counter < 10){
      counter = 10;
      setCounter(counter);
    }
    else{
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Janak + React</h1>
      <h2> Counter value : {counter}</h2>

      <button onClick={addValue}> Add value {counter} </button>
      <br/>
      <button onClick={removeValue}> Remove value {counter}</button>
    </>
  )
}

export default App
