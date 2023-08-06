import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';

import { classNames } from 'shared/libs';
import { Text } from 'shared/ui/Text';

import {
    DynamicModuleLoader,
    ReducersMap,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';

import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';

import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

type Props = {
    className?: string;
}

const initialReducers: ReducersMap = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: Props) => {
    const { t } = useTranslation('article');
    const { id } = useParams();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const handleSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('ARTICLE_NOT_FOUND')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('COMMENTS')} className={classNames(cls.commentTitle)} />
                <AddCommentForm onSendComment={handleSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
