import { TestAsyncThunk } from 'shared/libs/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const profile: Profile = {
    firstname: 'dan',
    lastname: 'Pog',
    username: 'admin',
    age: 33,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Tbilisi',
};

describe('fetchProfileData', () => {
    it('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
        const action = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(profile);
    });

    it('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('rejected');
    });
});
