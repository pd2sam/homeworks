import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function UserTodos() {
  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((res) => res.json())
      .then(setTodos);
  }, [id]);

  return (
    <div>
      <h2>User {id} Todos</h2>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}