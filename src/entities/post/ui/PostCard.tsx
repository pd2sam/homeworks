import type { Post } from '../../../shared/types/post';

const PostCard = ({title, body}: Post) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}
export default PostCard;