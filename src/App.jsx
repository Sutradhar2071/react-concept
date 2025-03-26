
import './App.css'

import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Comments from './Comments'
import Posts from './Posts'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const friendsFetch = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}


const commentsFetch = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json()
}


const postsFetch = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

function App() {

  const postspromise = postsFetch();

  const friendsPromise = friendsFetch();
  const commentsPromise = commentsFetch()

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

      <Suspense fallback={<h2>Posts soon...</h2>}>
        <Posts postspromise={postspromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h2 className='card'>Comments Loading...</h2>}>
        <Comments commentsPromise={commentsPromise}></Comments>
      </Suspense> */}




      {/* <Suspense fallback={<h2 className='card'>Friends are coming...</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <br />


      {/* <Suspense fallback={<h2>Loading...</h2>}>
      <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}




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
