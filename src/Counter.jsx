import { useState } from "react"

export default function Counter (){
    const [count , setCount] = useState(0)

    const handle=()=>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const CounterStyle ={
        border: "2px solid yellow"
    }



    return(
        <div style={CounterStyle}>
            <h2>Counter: {count}</h2>
            <button onClick={handle}>Add</button>
        </div>
    )
}