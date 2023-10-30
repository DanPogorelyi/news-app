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
