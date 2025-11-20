import { useMemo, useState, useCallback } from 'react';
import usePosts from '../features/PostList/model/hooks/usePosts';
import type { Post } from '../shared/types/post';
import PostCard from '../entities/post/ui/PostCard';
import PostLengthFilter from '../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../features/PostLengthFilter/lib/filterByLength';
import CommentList from '../widgets/CommentList/ui/CommentList';

const PostsComponent = () => {
  const { posts, loading, error } = usePosts();
  const [minLength, setMinLength] = useState<number | undefined>();
  const [maxLength, setMaxLength] = useState<number | undefined>();

  const handleFilterChange = useCallback((min?: number, max?: number) => {
    setMinLength(min);
    setMaxLength(max);
  }, []);

  const filteredPosts = useMemo(() => 
    filterByLength(posts, minLength, maxLength),
    [posts, minLength, maxLength]
  );

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="posts-page">
      <PostLengthFilter onFilterChange={handleFilterChange} />
      <ul className="post-list">
        {filteredPosts.map((post: Post) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
      <CommentList />
    </div>
  );
}

export default PostsComponent;