import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0);
    const [six, setSix] = useState(0);
    const [four, setFour] = useState(0);
    const handleSingle = ()=>{
        const newRun = runs + 1;
        setRuns(newRun)
    };
    const handleSix = ()=> {
        const newRun = runs + 6;
        const newSix = six + 1;
        setSix(newSix)
        setRuns(newRun)
    };
    const handleFour = ()=>{
        const newRun  = runs + 4;
        const newFour = four + 1;
        setFour(newFour)
        setRuns(newRun)
    }
    return(
        <div>
            <h1>Batsman India</h1>
            <p>six {six}</p>
            <p>four {four}</p>
            {
            runs >= 100 ?<p>your score 100+ </p> : runs>=50? <p>your score 50+</p> : null
            }
            <p>Score: {runs}</p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}