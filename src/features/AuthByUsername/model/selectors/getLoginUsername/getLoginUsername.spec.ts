import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    it('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                userName: 'Dan',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toBe('Dan');
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
