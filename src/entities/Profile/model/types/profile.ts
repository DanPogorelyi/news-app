import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export type Profile = {
    id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string;
    avatar?: string;
}

export const enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export type ProfileSchema = {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
