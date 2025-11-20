import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../../../shared/types/todo';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        getTodos: build.query<Todo[], void>({
            query: () => '/todos',
            providesTags: ['Todo'],
        }),
        getTodoById: build.query<Todo, number>({
            query: (id) => `/todos/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Todo', id }],
        }),
        getTodosByUserId: build.query<Todo[], number>({
            query: (userId) => `/users/${userId}/todos`,
            providesTags: ['Todo'],
        }),
    }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery, useGetTodosByUserIdQuery } = todosApi;

