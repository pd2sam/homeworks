import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Album } from '../../../shared/types/album';

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Album'],
    endpoints: (build) => ({
        getAlbums: build.query<Album[], void>({
            query: () => '/albums',
            providesTags: ['Album'],
        }),
        getAlbumById: build.query<Album, number>({
            query: (id) => `/albums/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Album', id }],
        }),
        getAlbumsByUserId: build.query<Album[], number>({
            query: (userId) => `/users/${userId}/albums`,
            providesTags: ['Album'],
        }),
    }),
});

export const { useGetAlbumsQuery, useGetAlbumByIdQuery, useGetAlbumsByUserIdQuery } = albumsApi;

