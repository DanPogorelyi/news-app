import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile, ValidateProfileError } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';

const profile: Profile = {
    firstname: 'dan',
    lastname: 'Pog',
    username: 'admin',
    age: 33,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Tbilisi',
    id: '1',
};

describe('updateProfileData', () => {
    it('success fetch', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profile,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }));

        const action = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(profile);
    });

    it('error fetch', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profile,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const action = await thunk.callThunk();

        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    it('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...profile,
                    firstname: '',
                    lastname: '',
                    age: 0,
                },
            },
        });

        const action = await thunk.callThunk();

        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
        ]);
    });
});
