import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import { getProfileData } from './getProfileData';

const profile: Profile = {
    firstname: 'dan',
    lastname: 'Pog',
    username: 'admin',
    age: 33,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Tbilisi',
};

describe('getProfileData', () => {
    it('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profile,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(profile);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
