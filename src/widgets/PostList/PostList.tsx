import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);

export default PostList;