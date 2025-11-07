type Post = {
    id: number;
    title: string;
    body: string;
}

const PostCard = ({title, body}: Post) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default PostCard;