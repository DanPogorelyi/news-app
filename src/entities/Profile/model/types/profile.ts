import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export type Profile = {
    firstname?: string;
    lastname?: string;
    username?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string;
    avatar?: string;
}

export type ProfileSchema = {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
