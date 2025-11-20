import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Comment } from '../../../shared/types/comment';

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Comment'],
    endpoints: (build) => ({
        getComments: build.query<Comment[], void>({
            query: () => '/comments',
            providesTags: ['Comment'],
        }),
        getCommentById: build.query<Comment, number>({
            query: (id) => `/comments/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Comment', id }],
        }),
        getCommentsByPostId: build.query<Comment[], number>({
            query: (postId) => `/posts/${postId}/comments`,
            providesTags: (_result, _error, postId) => [{ type: 'Comment', id: postId }],
        }),
    }),
});

export const { useGetCommentsQuery, useGetCommentByIdQuery, useGetCommentsByPostIdQuery } = commentsApi;

