import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface Params {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, Params, ThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            // const response = await axios.post<User>('http://localhost:8000/login', authData);
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
