import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';

const profile: Profile = {
    firstname: 'dan',
    lastname: 'Pog',
    username: 'admin',
    age: 33,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Tbilisi',
};

describe('validateProfileData', () => {
    it('success', async () => {
        const result = validateProfileData(profile);

        expect(result).toEqual([]);
    });

    it('no data', async () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    it('without firstname and lastname', async () => {
        const result = validateProfileData({
            ...profile,
            firstname: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    it('incorrect age', async () => {
        const result = validateProfileData({
            ...profile,
            age: 0,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });

    it('incorrect country', async () => {
        const result = validateProfileData({
            ...profile,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_COUNTRY]);
    });

    it('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USER_AGE,
            ValidateProfileError.INCORRECT_USER_COUNTRY,
        ]);
    });
});
