import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

type Props = {
    className?: string;
}

export const Navbar = ({ className }: Props) => {
    const { t } = useTranslation(['main', 'about']);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.INVERTED}>
                    {t('MAIN_PAGE', { ns: 'main' })}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
                    {t('ABOUT_PAGE', { ns: 'about' })}
                </AppLink>
            </div>
        </div>
    );
};
