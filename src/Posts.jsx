import { use } from "react"
import Post from "./Post"

export default function Posts ({postspromise}){
    const posts = use(postspromise)
    // console.log(posts)
    return (
        <div className="card">
            <h2>Posts: {posts.length}</h2>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}