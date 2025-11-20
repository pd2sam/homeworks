import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Post } from '../../../../shared/types/post';
import { postsApi } from '../../../posts/api/postsApi';
import type { RootState } from '../../../../app/providers/store/store';

export const postAdapter = createEntityAdapter<Post>({
    sortComparer: (a: Post, b: Post) => a.id - b.id,
});

const postSlice = createSlice({
    name: 'posts',
    initialState: postAdapter.getInitialState(),
    reducers: {
        addPost: postAdapter.addOne,
        addPosts: postAdapter.addMany,
        updatePost: postAdapter.updateOne,
        removePost: postAdapter.removeOne,
        setAllPosts: postAdapter.setAll,
        setPosts: postAdapter.setMany,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
                postAdapter.upsertMany(state, action.payload);
            })
            .addMatcher(postsApi.endpoints.getPostById.matchFulfilled, (state, action) => {
                postAdapter.upsertOne(state, action.payload);
            })
            .addMatcher(postsApi.endpoints.getPostsByUserId.matchFulfilled, (state, action) => {
                postAdapter.upsertMany(state, action.payload);
            });
    },
});

export const {
    addPost,
    addPosts,
    updatePost,
    removePost,
    setAllPosts,
    setPosts,
} = postSlice.actions;

const selectPostsState = (state: RootState) => state.posts;

export const postSelectors = postAdapter.getSelectors(selectPostsState);

export const selectPostsLoading = (state: RootState) => {
    return postsApi.endpoints.getPosts.select()(state).isLoading;
};

export const selectPostByIdLoading = (state: RootState, postId: number) => {
    return postsApi.endpoints.getPostById.select(postId)(state).isLoading;
};

export const selectPostsByUserIdLoading = (state: RootState, userId: number) => {
    return postsApi.endpoints.getPostsByUserId.select(userId)(state).isLoading;
};

export const selectPostsError = (state: RootState) => {
    return postsApi.endpoints.getPosts.select()(state).error;
};

export const selectPostByIdError = (state: RootState, postId: number) => {
    return postsApi.endpoints.getPostById.select(postId)(state).error;
};

export const selectPostsByUserIdError = (state: RootState, userId: number) => {
    return postsApi.endpoints.getPostsByUserId.select(userId)(state).error;
};

export const selectIsPostCached = (state: RootState, postId: number) => {
    const queryState = postsApi.endpoints.getPostById.select(postId)(state);
    return queryState.status === 'fulfilled' || queryState.status === 'pending';
};

export const selectIsUserPostsCached = (state: RootState, userId: number) => {
    const queryState = postsApi.endpoints.getPostsByUserId.select(userId)(state);
    return queryState.status === 'fulfilled' || queryState.status === 'pending';
};

export const selectUserPostsFromCache = (state: RootState, userId: number): Post[] => {
    const queryState = postsApi.endpoints.getPostsByUserId.select(userId)(state);
    return queryState.data ?? [];
};

export const selectPostByIdFromCache = (state: RootState, postId: number): Post | undefined => {
    const queryState = postsApi.endpoints.getPostById.select(postId)(state);
    return queryState.data;
};

export default postSlice.reducer;

