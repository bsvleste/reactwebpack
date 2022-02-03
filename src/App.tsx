import {useState} from 'react'
import './styles/global.scss'
export function App(){
  const [counter,setCounter]= useState(0)
  
  function increment(){
    setCounter(counter +1)
  }
  return (
  <>
    <h1>Clique{counter}</h1>
    <button type="button" onClick={increment}>Increment O BUTTON</button>
   <h2>{counter}</h2>
  </>
  )    
}