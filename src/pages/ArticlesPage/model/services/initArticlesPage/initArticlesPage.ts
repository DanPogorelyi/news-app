import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { getArticlesPageInitialized } from '../../selectors/articlesPage';
import { articlesPageSliceActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const initialized = getArticlesPageInitialized(getState());

        if (!initialized) {
            const orderParam = searchParams.get('order');
            const sortParam = searchParams.get('sort');
            const searchParam = searchParams.get('search');
            const typeParam = searchParams.get('type');

            if (orderParam) {
                dispatch(articlesPageSliceActions.setOrder(orderParam as SortOrder));
            }

            if (sortParam) {
                dispatch(articlesPageSliceActions.setSort(sortParam as ArticleSortField));
            }

            if (searchParam) {
                dispatch(articlesPageSliceActions.setSearch(searchParam));
            }

            if (typeParam) {
                dispatch(articlesPageSliceActions.setType(typeParam as ArticleType));
            }

            dispatch(articlesPageSliceActions.initState());
            dispatch(fetchArticlesList());
        }
    },
);
