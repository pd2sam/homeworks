import React from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostCardProps = {
  post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div id='post-card'>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
);

export default PostCard;