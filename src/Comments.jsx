import { use } from "react"
import Comment from "./Comment"

export default function Comments({commentsPromise}){
    const comments = use(commentsPromise)
    console.log(comments)
    return (
        <div className="card">
            <h2>comments: </h2> <br />
            {
                    comments.map(comment=><Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}