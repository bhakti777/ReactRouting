import React, { useState } from "react";
import  Button  from "react-bootstrap/Button";

const TestPage=()=>{

    const [number,setNumber]=useState(3);


    const increment=()=>{
        setNumber((number)=>number+1)
    }

    const decrement=()=>{
        setNumber((number)=>number-1)

    }
    return(
        <>
        <Button onClick={decrement}>-</Button>
        <span>{number}</span>
        <Button onClick={increment}>+</Button>

        </>
    )
}

export default TestPage