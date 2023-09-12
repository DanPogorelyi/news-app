import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/libs';
import { Button } from 'shared/ui/Button';
import { routePath } from 'shared/config/routeConfig/routeConfig';

import { getArticleDetailsData } from 'entities/Article';

import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

type Props = {
    className?: string;
}

export const ArticleDetailsPageHeader = ({ className }: Props) => {
    const navigate = useNavigate();

    const { t } = useTranslation('article');

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const navigateToList = () => {
        navigate(routePath.articles);
    };

    const navigateToEditArticlePage = () => {
        navigate(`${routePath.article_details}${article?.id}/edit`);
    };

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={navigateToList}>{t('BACK_TO_ARTICLES')}</Button>
            {canEdit && (
                <Button
                    className={cls.editButton}
                    onClick={navigateToEditArticlePage}
                >
                    {t('EDIT')}
                </Button>
            )}
        </div>
    );
};
