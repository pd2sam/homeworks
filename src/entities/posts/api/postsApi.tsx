import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from '../../../shared/types/post';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Post', 'UserPosts'],
    endpoints: (build) => ({
        getPosts: build.query<Post[], void>({
            query: () => '/posts',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Post' as const, id })),
                          { type: 'Post', id: 'LIST' },
                      ]
                    : [{ type: 'Post', id: 'LIST' }],
        }),
        getPostById: build.query<Post, number>({
            query: (id) => `/posts/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Post', id }],
        }),
        getPostsByUserId: build.query<Post[], number>({
            query: (userId) => `/users/${userId}/posts`,
            providesTags: (result, _error, userId) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Post' as const, id })),
                          { type: 'UserPosts', id: userId },
                      ]
                    : [{ type: 'UserPosts', id: userId }],
        }),
        invalidatePost: build.mutation<void, number>({
            queryFn: () => ({ data: undefined }),
            invalidatesTags: (_result, _error, postId) => [{ type: 'Post', id: postId }],
        }),
        invalidateUserPosts: build.mutation<void, number>({
            queryFn: () => ({ data: undefined }),
            invalidatesTags: (_result, _error, userId) => [
                { type: 'UserPosts', id: userId },
                { type: 'Post', id: 'LIST' },
            ],
        }),
        invalidateAllPosts: build.mutation<void, void>({
            queryFn: () => ({ data: undefined }),
            invalidatesTags: [{ type: 'Post', id: 'LIST' }, 'Post', 'UserPosts'],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetPostsByUserIdQuery,
    useInvalidatePostMutation,
    useInvalidateUserPostsMutation,
    useInvalidateAllPostsMutation,
} = postsApi;

