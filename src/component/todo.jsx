import React from "react";
import { useState, useEffect } from "react";

const Todo = () => {

    const [count, setCount] = useState(0)
    const [calculation,setcalculation]=useState(1)
    //on the mounting phase 
    //it keeps on running on each render

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count + 1)
    //     }, 1000)
    // },[])

    useEffect(()=>{
setcalculation(count*2)
    },[count])

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={()=>{setCount(count+1)}}> +</button>

            <h2>Calculation :{calculation}</h2>
        </>
    )
}
export default Todo