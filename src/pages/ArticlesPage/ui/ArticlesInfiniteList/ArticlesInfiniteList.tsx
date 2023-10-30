import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';

import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPage';

type Props = {
    className?: string;
}

export const ArticlesInfiniteList = ({ className }: Props) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    return (
        <ArticleList
            view={view}
            articles={articles}
            className={className}
            isLoading={isLoading}
        />
    );
};
