// import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const [count, increase] = useState(0);
  const [count2, increase2] = useState(0);
  useEffect(() => {
    console.log("button is clicked");
  }, [count]) 

  useEffect(()=>{
    document.querySelector('h1').style.background='green';
    console.log("alsdf");
  }, [])
  return (
    <div>
      <button onClick={() => { increase(count + 1) }}>Click me</button>
      <button onClick={()=>{increase2(count2+1)}}>Click me 2</button>
      <h1>Hello</h1>
    </div>
  )
}

export default App
