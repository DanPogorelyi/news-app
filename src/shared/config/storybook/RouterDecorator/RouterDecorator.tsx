import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';

// eslint-disable-next-line max-len
export const RouterDecorator = (StoryComponent: Story) => <BrowserRouter><StoryComponent /></BrowserRouter>;
