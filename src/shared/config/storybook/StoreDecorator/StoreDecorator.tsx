import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';
import { ReducersMap } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import {
    articleDetailsCommentsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

const defaultAsyncReducers: ReducersMap = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersMap,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{
            ...defaultAsyncReducers,
            ...asyncReducers,
        }}
    >
        <StoryComponent />
    </StoreProvider>
);
