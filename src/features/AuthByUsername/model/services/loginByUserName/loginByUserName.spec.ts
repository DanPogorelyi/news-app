import { userActions, UserRole } from 'entities/User';
import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

describe('loginByUserName', () => {
    it('success login', async () => {
        const userValue = { username: '123', id: '1', roles: [UserRole.ADMIN] };
        const thunk = new TestAsyncThunk(loginByUserName);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const action = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(userValue);
    });

    it('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toBe('error');
    });
});
