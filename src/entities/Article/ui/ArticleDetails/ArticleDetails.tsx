import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs';
import {
    DynamicModuleLoader,
    ReducersMap,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text';

import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';

import { ArticleBlockType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleCode } from '../ArticleCode/ArticleCode';
import { ArticleText } from '../ArticleText/ArticleText';
import { ArticleImage } from '../ArticleImage/ArticleImage';

import cls from './ArticleDetails.module.scss';

type Props = {
    className?: string;
    id: string;
}

const initialReducers: ReducersMap = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: Props) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const blocks = useMemo(() => article?.blocks.map((block) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCode
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleText
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImage
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }), [article?.blocks]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('ARTICLE_LOAD_ERROR')}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    size={TextSize.L}
                    text={article?.subtitle}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {blocks}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';
