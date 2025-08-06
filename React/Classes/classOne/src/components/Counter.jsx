import { useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0)
    const increment = ()=>{ 
        console.log("clicked")
        setCount(count +1);
    }

    const decrement = ()=>{
        setCount(count-1);
    }
    return <div>
        <p>Current count : {count}</p>
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
    </div>
}

export default Counter;