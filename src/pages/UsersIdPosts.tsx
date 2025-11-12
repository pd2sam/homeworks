import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function UserPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json())
      .then(setPosts);
  }, [id]);

  return (
    <div>
      <h2>User {id} Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}