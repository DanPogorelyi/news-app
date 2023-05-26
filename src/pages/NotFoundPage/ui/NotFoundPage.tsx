import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import cls from './NotFoundPage.module.scss';

type Props = {
    className?: string;
}

export const NotFoundPage = ({ className }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('PAGE_NOT_FOUND')}
        </div>
    );
};
