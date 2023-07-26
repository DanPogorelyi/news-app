import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

type Props = {
    className?: string;
}

const ArticleDetailsPage = ({ className }: Props) => {
    const { t } = useTranslation('article');
    const { id } = useParams();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('ARTICLE_NOT_FOUND')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
