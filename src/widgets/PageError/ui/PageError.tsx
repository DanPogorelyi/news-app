import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

type Props = {
    className?: string;
}

export const PageError = ({ className }: Props) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('PAGE_ERROR')}</p>
            <Button onClick={reloadPage}>{t('RELOAD_PAGE')}</Button>
        </div>
    );
};
