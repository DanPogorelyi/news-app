import { useMemo } from 'react';

import { classNames } from 'shared/libs';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';

import cls from './ArticleList.module.scss';

type Props = {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => Array
    .from({ length: view === ArticleView.LIST ? 3 : 9 })
    .map((_, index) => (
        <ArticleListItemSkeleton
            key={index}
            view={view}
            className={cls.card}
        />
    ));

export const ArticleList = ({
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
}: Props) => {
    const content = useMemo(() => articles.map((article) => (
        <ArticleListItem
            key={article.id}
            view={view}
            article={article}
            className={cls.card}
        />
    )), [articles, view]);

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? content : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
