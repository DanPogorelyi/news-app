import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';

import { classNames } from 'shared/libs';
import { Text, TextSize } from 'shared/ui/Text';

import { DynamicModuleLoader, ReducersMap } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';

import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';

import { Button } from 'shared/ui/Button';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page';

import { getArticleRecommendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsRecommendationsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

type Props = {
    className?: string;
}

const initialReducers: ReducersMap = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: Props) => {
    const { t } = useTranslation('article');
    const { id } = useParams();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const handleSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const navigateToList = () => {
        navigate(routePath.articles);
    };

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('ARTICLE_NOT_FOUND')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button onClick={navigateToList}>{t('BACK_TO_ARTICLES')}</Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    title={t('RECOMMENDATIONS')}
                    className={classNames(cls.recommendationsTitle)}
                />
                <ArticleList
                    target="_blank"
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={classNames(cls.recommendations)}
                />

                <Text
                    size={TextSize.L}
                    title={t('COMMENTS')}
                    className={classNames(cls.commentsTitle)}
                />
                <AddCommentForm onSendComment={handleSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
