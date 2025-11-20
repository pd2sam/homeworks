import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../../shared/types/user';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['User', 'UserList'],
    endpoints: (build) => ({
        getUsers: build.query<User[], void>({
            query: () => '/users',
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'User' as const, id })),
                          { type: 'UserList', id: 'LIST' },
                      ]
                    : [{ type: 'UserList', id: 'LIST' }],
        }),
        getUserById: build.query<User, number>({
            query: (id) => `/users/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'User', id }],
        }),
        invalidateUser: build.mutation<void, number>({
            queryFn: () => ({ data: undefined }),
            invalidatesTags: (_result, _error, userId) => [{ type: 'User', id: userId }],
        }),
        invalidateAllUsers: build.mutation<void, void>({
            queryFn: () => ({ data: undefined }),
            invalidatesTags: [{ type: 'UserList', id: 'LIST' }, 'User', 'UserList'],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useInvalidateUserMutation,
    useInvalidateAllUsersMutation,
} = usersApi;

