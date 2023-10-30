import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

const errors: ValidateProfileError[] = [
    ValidateProfileError.INCORRECT_USER_COUNTRY,
    ValidateProfileError.INCORRECT_USER_DATA,
    ValidateProfileError.INCORRECT_USER_AGE,
];

describe('getProfileValidateErrors', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
