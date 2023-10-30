import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/libs';
import { Text, TextSize } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';

import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

type Props = {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = ({ className, id }: Props) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('about');
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const handleSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('COMMENTS')}
            />
            <AddCommentForm onSendComment={handleSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </div>
    );
};
