import { useEffect, useState } from "react";

const BasicEffect = ()=>{
   

useEffect(()=>{
    console.log("It'll render only for the first time")
},[])

    function handleClick(){
        setCount(count+1);
    }
    return <div>
        <h1>Check the console to see the msg</h1>
       
    </div>
}
export default BasicEffect;