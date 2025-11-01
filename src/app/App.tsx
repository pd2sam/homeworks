import React from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import PostList from '../widgets/PostList/PostList';


const App = () => {
  const posts = [
    { id: 1, title: 'Первый пост', body: 'Описание первого поста' },
    { id: 2, title: 'Второй пост', body: 'Описание второго поста' },
    { id: 3, title: 'Третий пост', body: 'Описание третьего поста' },
  ];

  return (
    <MainLayout>
      <h1>Список постов</h1>
      <PostList posts={posts} />
    </MainLayout>
  );
};

export default App;