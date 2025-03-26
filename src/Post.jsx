export default function Post ({post}){
    const {title, body} = post
    // console.log(post)
    return (
        <div className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}