type Post = {
    id: number;
    title: string;
    body: string;
};

export const filterByLength = (posts: Post[], minLength?: number, maxLength?: number): Post[] => {
    return posts.filter(post => {
        const titleLength = post.title.length;
        
        if (minLength !== undefined && titleLength < minLength) {
            return false;
        }
        
        if (maxLength !== undefined && titleLength > maxLength) {
            return false;
        }
        
        return true;
    });
};

