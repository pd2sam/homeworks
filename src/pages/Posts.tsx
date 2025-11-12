import usePosts from '../features/PostList/model/hooks/usePosts';

const PostsComponent = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      {posts.map((post: { id: number; title: string; body: string }) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;