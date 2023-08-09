import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import { Card } from 'shared/ui/Card';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';

import { useNavigate } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleText } from '../ArticleText/ArticleText';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';

import cls from './ArticleListItem.module.scss';

type Props = {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = ({ className, article, view }: Props) => {
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const navigateToArticle = () => {
        navigate(routePath.article_details + article.id);
    };

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.GRID) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card} onClick={navigateToArticle}>
                    <div className={cls.imageWrapper}>
                        <img
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                        />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </div>
        );
    }

    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text text={article.user.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} className={cls.title} />
                {types}
                <img
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                />
                {textBlock && (
                    <ArticleText
                        block={textBlock}
                        className={cls.textBlock}
                    />
                ) }
                <div className={cls.footer}>
                    <Button onClick={navigateToArticle}>{t('READ_MORE')}</Button>
                    {views}
                </div>
            </Card>
        </div>
    );
};
