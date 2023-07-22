import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/avatar-storybook.jpeg';
import { ProfileCard } from './ProfileCard';
import { Profile } from '../../model/types/profile';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const profile: Profile = {
    firstname: 'dan',
    lastname: 'Pog',
    username: 'admin',
    age: 33,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Tbilisi',
    avatar: AvatarImg,
};

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: profile,
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
