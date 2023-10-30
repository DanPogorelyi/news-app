import { useCallback } from 'react';

import { classNames } from 'shared/libs';
import { DynamicModuleLoader, ReducersMap } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';

import { Page } from 'shared/ui/Page';

import { useSearchParams } from 'react-router-dom';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchMoreArticles } from '../../model/services/fetchMoreArticles/fetchMoreArticles';
import cls from './ArticlesPage.module.scss';
import { articlesPageSliceReducer } from '../../model/slices/articlesPageSlice';
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
                <ArticlesInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
