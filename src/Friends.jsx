import { use } from "react"

export default function Friends ({friendsPromise}){
    const friends =use(friendsPromise)
    console.log(friends)
    return (
        <div className="card">
            <h2>Friends zone {friends.length}</h2>
        </div>
    )
}