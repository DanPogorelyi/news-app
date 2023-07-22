import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import cls from './ArticlesPage.module.scss';

type Props = {
    className?: string;
}

const ArticlesPage = ({ className }: Props) => {
    const { t } = useTranslation('about');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ArticlesPage
        </div>
    );
};

export default ArticlesPage;
