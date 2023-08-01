import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

type Props = {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: Props) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        isLoading={isLoading}
                        className={cls.comment}
                    />
                ))
                : <Text text={t('COMMENTS_ARE_ABSENT')} />}
        </div>
    );
};
