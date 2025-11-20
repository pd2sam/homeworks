import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { User } from '../../../../shared/types/user';
import { usersApi } from '../../../users/api/usersApi';
import type { RootState } from '../../../../app/providers/store/store';

export const userAdapter = createEntityAdapter<User>({
    sortComparer: (a: User, b: User) => a.id - b.id,
});

const userSlice = createSlice({
    name: 'users',
    initialState: userAdapter.getInitialState(),
    reducers: {
        addUser: userAdapter.addOne,
        addUsers: userAdapter.addMany,
        updateUser: userAdapter.updateOne,
        removeUser: userAdapter.removeOne,
        setAllUsers: userAdapter.setAll,
        setUsers: userAdapter.setMany,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(usersApi.endpoints.getUsers.matchFulfilled, (state, action) => {
                userAdapter.upsertMany(state, action.payload);
            })
            .addMatcher(usersApi.endpoints.getUserById.matchFulfilled, (state, action) => {
                userAdapter.upsertOne(state, action.payload);
            });
    },
});

export const {
    addUser,
    addUsers,
    updateUser,
    removeUser,
    setAllUsers,
    setUsers,
} = userSlice.actions;

const selectUsersState = (state: RootState) => state.users;

export const userSelectors = userAdapter.getSelectors(selectUsersState);

export const selectUsersLoading = (state: RootState) => {
    return usersApi.endpoints.getUsers.select()(state).isLoading;
};

export const selectUserByIdLoading = (state: RootState, userId: number) => {
    return usersApi.endpoints.getUserById.select(userId)(state).isLoading;
};

export const selectUsersError = (state: RootState) => {
    return usersApi.endpoints.getUsers.select()(state).error;
};

export const selectUserByIdError = (state: RootState, userId: number) => {
    return usersApi.endpoints.getUserById.select(userId)(state).error;
};

export const selectIsUserCached = (state: RootState, userId: number) => {
    const queryState = usersApi.endpoints.getUserById.select(userId)(state);
    return queryState.status === 'fulfilled' || queryState.status === 'pending';
};

export const selectUserByIdFromCache = (state: RootState, userId: number): User | undefined => {
    const queryState = usersApi.endpoints.getUserById.select(userId)(state);
    return queryState.data;
};

export default userSlice.reducer;

