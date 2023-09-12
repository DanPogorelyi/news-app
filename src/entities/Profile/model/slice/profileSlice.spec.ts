import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const profile: Profile = {
    firstname: 'dan',
    lastname: 'Pog',
    username: 'admin',
    age: 33,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Tbilisi',
};

describe('profileSlice', () => {
    it('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    it('test updateProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    it('test updateProfileData.fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(profile, ''),
        )).toEqual({
            isLoading: false,
            data: profile,
            form: profile,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
