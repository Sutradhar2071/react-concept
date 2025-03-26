import { use } from "react"

export default function Users ({fetchUsers}){
    const users = use(fetchUsers)
    return (
        <div className="card">
            <h2>USers: {users.length}</h2>
        </div>
    )
}