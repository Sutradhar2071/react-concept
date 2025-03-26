export default function Comment ({comment}){
    console.log(comment)
    const {name, email, body}= comment;
    return(
        <div className="card">
            <h2>Name: {comment.name}</h2>
            <h2>Email: {comment.email}</h2>
            <p>{comment.body}</p>
        </div>
    )
}