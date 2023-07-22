import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    it('test set username', () => {
        const state: DeepPartial<LoginSchema> = { userName: '123' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName('123123'),
        )).toEqual({ userName: '123123' });
    });

    it('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
