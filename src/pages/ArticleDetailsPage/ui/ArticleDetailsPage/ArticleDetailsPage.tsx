import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import cls from './ArticleDetailsPage.module.scss';

type Props = {
    className?: string;
}

const ArticleDetailsPage = ({ className }: Props) => {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ArticleDetailsPage
        </div>
    );
};

export default ArticleDetailsPage;
