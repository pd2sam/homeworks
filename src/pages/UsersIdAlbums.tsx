import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Album {
  id: number;
  title: string;
}

export default function UserAlbums() {
  const { id } = useParams();
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then((res) => res.json())
      .then(setAlbums);
  }, [id]);

  return (
    <div>
      <h2>User {id} Albums</h2>
      <ul>
        {albums.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}