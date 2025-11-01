type Post = {
  id: number;
  title: string;
  body: string;
};

const PostCard = ({ post }: { post: Post }) => (
  <div id='post-card'>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
);

export default PostCard;