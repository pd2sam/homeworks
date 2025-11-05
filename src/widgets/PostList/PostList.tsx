import { useMemo, useState, useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import withLoading from '../../shared/lib/hoc/withLoading';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';

const posts = [
    { id: 1, title: 'Пост один очень длинный и много текста с очень длинным заголовком', body: 'Наполнение поста очень длинное и много текста тоже' },
    { id: 2, title: 'Пост два просто длинный заголовок', body: 'Наполнение второго поста очень длинное и много текста тоже' },
    { id: 3, title: 'Пост три короткий', body: 'Наполнение третьего поста тоже много текста' }
];

const PostList = () => {
    const [minLength, setMinLength] = useState<number | undefined>();
    const [maxLength, setMaxLength] = useState<number | undefined>();

    const handleFilterChange = useCallback((min?: number, max?: number) => {
        setMinLength(min);
        setMaxLength(max);
    }, []);

    const filteredPosts = useMemo(() => 
        filterByLength(posts, minLength, maxLength),
        [minLength, maxLength]
    );

    const postsList = useMemo(() => 
        filteredPosts.map(post => (
            <PostCard key={post.id} {...post} />
        )),
        [filteredPosts]
    );

    return (
        <div>
            <PostLengthFilter onFilterChange={handleFilterChange} />
            <div className="post-list">
                {postsList}
            </div>
        </div>
    );
};

export default withLoading(PostList);