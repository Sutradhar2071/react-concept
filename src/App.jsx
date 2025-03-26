
import './App.css'

import Counter from './Counter'
import Batsman from './Batsman'

function App() {

  function handle(){
    alert('i am clicked ')
  }

  const handleClick =()=>{
    alert('ani 3')
  }

  const han =(num)=>{
    const result = num+5;
    alert(result)
  }

  return (
    <>
      <h3>Vite + React</h3> <br /> <br />
      <Batsman></Batsman> <br /> <br /> <br />

      <Counter></Counter> <br />



      <button onClick={handle}>clicked me</button>
      <button onClick={function handleC(){
        alert("2")
      }}>clicked me</button>
      <button onClick={handleClick}>click </button>
      <button onClick={()=>alert('ami4')}>click </button>
      <button onClick={()=>han(10)}>click num </button>
    </>
  )
}

export default App
