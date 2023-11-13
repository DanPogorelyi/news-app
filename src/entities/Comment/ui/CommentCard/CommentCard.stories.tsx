import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserRole } from 'entities/User';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya', roles: [UserRole.ADMIN] },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
