import { Route, Routes } from "react-router-dom";
import PostsComponent from "../../../pages/Posts";
import UserTodos from "../../../pages/UsersIdTodos";
import UserPosts from "../../../pages/UsersIdPosts";
import AlbumPhotos from "../../../pages/AlbumsIdPhotos";
import UserAlbums from "../../../pages/UsersIdAlbums";
import PostDetail from "../../../pages/PostsId";


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/posts' element={<PostsComponent />}/>
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="users/:id/albums" element={<UserAlbums />} />
            <Route path="albums/:id/photos" element={<AlbumPhotos />} />
            <Route path="users/:id/todos" element={<UserTodos />} />
            <Route path="users/:id/posts" element={<UserPosts />} />
            </Routes>


    )
}

export default AppRouter;