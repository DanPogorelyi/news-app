import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInitialized, getArticlesPageNumber } from '../../selectors/articlesPage';
import { articlesPageSliceActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const initialized = getArticlesPageInitialized(getState());
        const page = getArticlesPageNumber(getState());

        if (!initialized) {
            dispatch(articlesPageSliceActions.initState());
            dispatch(fetchArticlesList({ page }));
        }
    },
);
