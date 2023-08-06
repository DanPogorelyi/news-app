import { classNames } from 'shared/libs';

import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

type Props = {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: Props) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={classNames(cls.header)}>
                    <Skeleton width={50} height={50} border="50%" />
                    <Skeleton width={100} height={15} className={cls.username} />
                </div>
                <Skeleton height={50} className={cls.text} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${routePath.profile}${comment.user.id}`}>
                <div className={classNames(cls.header)}>
                    {comment.user.avatar && (
                        <Avatar size={30} src={comment.user.avatar} />
                    )}
                    <Text className={cls.username} title={comment.user.username} />
                </div>
            </AppLink>
            <Text
                text={comment.text}
                className={cls.text}
            />
        </div>
    );
};
