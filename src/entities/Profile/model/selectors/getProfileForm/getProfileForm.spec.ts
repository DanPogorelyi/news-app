import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';
import { Profile } from '../../types/profile';

const profile: Profile = {
    firstname: 'dan',
    lastname: 'Pog',
    username: 'admin',
    age: 33,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Tbilisi',
};

describe('getProfileForm', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profile,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(profile);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
