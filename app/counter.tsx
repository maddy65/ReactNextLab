"use client";

import { useState, useEffect } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log(`count updated: ${count}`);
    },[count])

    return(
        <div>
            <h1> Counter :  {count} </h1>
            <button onClick ={() => setCount(count +1)}>Increment </button>
        </div>
    )
}