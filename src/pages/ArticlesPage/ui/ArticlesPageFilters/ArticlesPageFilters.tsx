import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/libs';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';

import {
    ArticleSortField,
    ArticleSortSelectors,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/libs/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';
import { articlesPageSliceActions } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPage';

import cls from './ArticlesPageFilters.module.scss';

type Props = {
    className?: string;
}

export const ArticlesPageFilters = ({ className }: Props) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 300);

    const handleChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageSliceActions.setView(view));
    }, [dispatch]);

    const handleChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageSliceActions.setSort(sort));
        dispatch(articlesPageSliceActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageSliceActions.setOrder(order));
        dispatch(articlesPageSliceActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageSliceActions.setSearch(search));
        dispatch(articlesPageSliceActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const handleChangeType = useCallback((type: ArticleType) => {
        dispatch(articlesPageSliceActions.setType(type));
        dispatch(articlesPageSliceActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelectors
                    sort={sort}
                    order={order}
                    onChangeSort={handleChangeSort}
                    onChangeOrder={handleChangeOrder}
                />
                <ArticleViewSelector view={view} onChangeView={handleChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    placeholder={t('SEARCH')}
                    onChange={handleChangeSearch}
                />
            </Card>
            <ArticleTypeTabs value={type} onChangeType={handleChangeType} />
        </div>
    );
};
