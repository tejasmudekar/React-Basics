
import './App.css';
import React, { useState } from 'react';


function App() {

  
  const [counter, setCounter]= useState(5)

  const addValue = () => {
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
  }

  const removeValue =() =>
  {
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)

  }

  return (
  <>
  <h1>React course with tejas {counter}        </h1>  
  <h2>COunter value: {counter}</h2>
  <button onClick={removeValue}>remove value</button> 
  <button onClick={addValue}>add value</button> 
  <p>footer: {counter}</p>   
    
    </>
  )

}

export default App;
