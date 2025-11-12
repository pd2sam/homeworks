import { useState } from 'react';
import PostList from "../widgets/PostList/PostList";
import CommentList from "../widgets/CommentList/ui/CommentList";
import MainLayout from "../shared/layouts/MainLayout";
import { ThemeProvider } from "../shared/lib/theme/ThemeContext";

const App = () => {
    const [isLoading] = useState(false);

    return (
        <ThemeProvider>
            <MainLayout >
                <PostList isLoading={isLoading} />
                <CommentList />
            </MainLayout>
        </ThemeProvider>
    );
};
export default App;