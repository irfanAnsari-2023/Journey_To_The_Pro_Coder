import { useEffect, useState } from "react";

const CounterEffect = ()=> {

    const[count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Count: ${count}`
    },[count])

    return <div>
        <button onClick={()=> setCount(count +1)}>Increment</button>
        <p>New Count : {count}</p>
    </div>
}
export default CounterEffect;