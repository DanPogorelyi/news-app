// import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

// FIXME any
describe('loginSlice', () => {
    it('test set username', () => {
        // const state: DeepPartial<LoginSchema> = { userName: '123' };
        const state: DeepPartial<any> = { userName: '123' };

        expect(loginReducer(
            state as any,
            loginActions.setUserName('123123'),
        )).toEqual({ userName: '123123' });
    });

    it('test set password', () => {
        const state: DeepPartial<any> = { password: '123' };

        expect(loginReducer(
            state as any,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
