import { Country, Currency } from 'shared/consts/common';

export type Profile = {
    firstname: string;
    lastname: string;
    username: string;
    age: number,
    currency: Currency,
    country: Country;
    city: string;
    avatar: string;
}

export type ProfileSchema = {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
