import PostCard from '../../entities/post/ui/PostCard';

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostList = ({ posts }: { posts: Post[] }) => (
  <div>
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default PostList;