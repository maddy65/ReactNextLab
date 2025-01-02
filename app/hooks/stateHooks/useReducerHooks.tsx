"use client";
import { useReducer } from "react";

export default function useReducerHooks(){

    const [count, dispatch] = useReducer(reducer, 0);

    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => dispatch({type :"increment"})}>Increment</button>
            <button onClick={() => dispatch({type :"decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type :"reset"})}>Reset</button>
        </div>
    )
}

function reducer(state : number, action :{type:string}){
    switch (action.type) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        case "reset":
          return 0;
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
      }
}