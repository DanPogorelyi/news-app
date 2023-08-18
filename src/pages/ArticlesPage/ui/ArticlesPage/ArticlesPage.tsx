import { useCallback } from 'react';

import { classNames } from 'shared/libs';

import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    DynamicModuleLoader,
    ReducersMap,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { ArticleView, ArticleViewSelector } from 'entities/Article';

import { Page } from 'shared/ui/Page';
import {
    fetchMoreArticles,
} from 'pages/ArticlesPage/model/services/fetchMoreArticles/fetchMoreArticles';
import {
    initArticlesPage,
} from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';
import cls from './ArticlesPage.module.scss';
import {
    articlesPageSliceActions,
    articlesPageSliceReducer,
    getArticles,
} from '../../model/slices/articlesPageSlice';

type Props = {
    className?: string;
}

const initialReducers: ReducersMap = {
    articlesPage: articlesPageSliceReducer,
};

const ArticlesPage = ({ className }: Props) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const loadMore = useCallback(() => {
        dispatch(fetchMoreArticles());
    }, [dispatch]);

    const handleChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageSliceActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticlesPage, {}, [className])} onScrollEnd={loadMore}>
                <ArticleViewSelector view={view} onChangeView={handleChangeView} />
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
