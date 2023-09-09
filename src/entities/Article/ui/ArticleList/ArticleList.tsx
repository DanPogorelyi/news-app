import { HTMLAttributeAnchorTarget, useMemo } from 'react';

import { classNames } from 'shared/libs';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';

import cls from './ArticleList.module.scss';

type Props = {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
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
    target,
}: Props) => {
    const { t } = useTranslation('article');

    const content = useMemo(() => articles.map((article) => (
        <ArticleListItem
            key={article.id}
            view={view}
            article={article}
            target={target}
            className={cls.card}
        />
    )), [articles, view]);

    if (!isLoading && articles.length === 0) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('ARTICLES_NOT_FOUND')} size={TextSize.L} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? content : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
