import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Photo {
  id: number;
  thumbnailUrl: string;
  title: string;
}

export default function AlbumPhotos() {
  const { id } = useParams();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((res) => res.json())
      .then(setPhotos);
  }, [id]);

  return (
    <div>
      <h2>Album {id} Photos</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 100px)", gap: "10px" }}>
        {photos.slice(0, 12).map((p) => (
          <img key={p.id} src={p.thumbnailUrl} alt={p.title} title={p.title} />
        ))}
      </div>
    </div>
  );
}