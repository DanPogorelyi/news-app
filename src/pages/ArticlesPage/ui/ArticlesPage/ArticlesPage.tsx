import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/libs';

import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    DynamicModuleLoader,
    ReducersMap,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';

import { Page } from 'shared/ui/Page';

import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchMoreArticles } from '../../model/services/fetchMoreArticles/fetchMoreArticles';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';
import cls from './ArticlesPage.module.scss';
import { articlesPageSliceReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

type Props = {
    className?: string;
}

const initialReducers: ReducersMap = {
    articlesPage: articlesPageSliceReducer,
};

const ArticlesPage = ({ className }: Props) => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const loadMore = useCallback(() => {
        dispatch(fetchMoreArticles());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticlesPage, {}, [className])} onScrollEnd={loadMore}>
                <ArticlesPageFilters />
                <ArticleList
                    view={view}
                    articles={articles}
                    className={cls.list}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
