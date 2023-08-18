import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../../selectors/articlesPage';
import { articlesPageSliceActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchMoreArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchMoreArticles',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const page = getArticlesPageNumber(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            const nextPage = page + 1;

            dispatch(articlesPageSliceActions.setPage(nextPage));
            dispatch(fetchArticlesList({ page: nextPage }));
        }
    },
);
