import React from 'react'
import { useReducer, useState } from 'react'
import { counterReducer, initialState } from '../../counterReducer.js'
const CounterUseReducer = () => {

   const [state, dispatch] = useReducer(counterReducer, initialState);
   const [inputValue, setInputValue] = useState(0);

   const handleIncrement = ()=>{
    dispatch({type:'increment'})
   }
   const handleDecrement = ()=>{
    dispatch({type:'decrement'})
   }

    const handleIncrementByAmount = ()=>{
    dispatch({type:'incrementByAmount', payload:+inputValue})
    setInputValue(0)
   }
   const handleDecrementByAmount = ()=>{
    dispatch({type:'decrementByAmount', payload:+inputValue})
    setInputValue(0)
   }
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    <br />
        <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>

        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
    </div>
  )
}

export default CounterUseReducer