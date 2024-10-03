import { useState } from 'react';
import './App.css'

function App() {
  const initialValue = 15;
  let [counter, setCounter] = useState(initialValue);
  let [message, setMessage] = useState('');

  // let counter = 15;

  const addValue = () => {
    if (counter >= 20){
      // console.log("Values more than 20 not allowed");
      setMessage("Values more than 20 not allowed");
    } else {
          // counter = counter + 1
    setCounter(counter + 1);
    // console.log("clicked", counter + 1);
    setMessage('');
    } 
  };

  const removeValue = () => {
    if (counter <= 0){
      // console.log("Values beyond zero not allowed");
      setMessage("Values beyond zero not allowed");
      
    } else {
      setCounter(counter - 1);
    // console.log("clicked", counter - 1)
      setMessage('');
    }
  };

  const resetValue = () => {
    // setCounter(15)
    setCounter(initialValue);
    setMessage('');
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      {message && <p>{message}</p>}

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <button onClick={resetValue}>Reset value</button>
    </>
  );
}

export default App
