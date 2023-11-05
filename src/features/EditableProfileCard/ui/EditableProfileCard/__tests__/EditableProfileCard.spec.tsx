import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';

import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from '../EditableProfileCard';
import { profileReducer } from '../../../model/slice/profileSlice';

const mockProfile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    username: 'user name',
    age: 18,
    currency: Currency.USD,
    country: Country.Armenia,
    city: 'New York',
    avatar: 'https://i.pravatar.cc/300',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: mockProfile,
            form: mockProfile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    it('should display cancel button when edit is clicked', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    it('should reset form when cancel button is clicked', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        const firstName = screen.getByTestId('ProfileCard.FirstName');
        const lastName = screen.getByTestId('ProfileCard.LastName');
        await userEvent.clear(firstName);
        await userEvent.clear(lastName);
        await userEvent.type(firstName, 'user');
        await userEvent.type(lastName, 'user');
        expect(firstName).toHaveValue('user');
        expect(lastName).toHaveValue('user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(firstName).toHaveValue('admin');
        expect(lastName).toHaveValue('admin');
    });

    // it('should display error when submit is unsuccessful', async () => {
    //     componentRender(<EditableProfileCard id="1" />, options);
    //
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    //     const firstName = screen.getByTestId('ProfileCard.FirstName');
    //     await userEvent.clear(firstName);
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
    //
    //     expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    // });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
