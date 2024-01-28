import './App.css';
import React, { useRef, useState } from 'react'
function App() {
  return (
    <div className="App">
      <h1>HOC </h1> // React higher order component
      <HOCRed cmp={Counter} />// passed counter function as props to HOC
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />

    </div>
  );
}
//different higher order components
function HOCRed(props)
{
  return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
}
function HOCGreen(props)
{
  return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
}
function HOCBlue(props)
{
  return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
}
function Counter()
{
  const [count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}

export default App;
