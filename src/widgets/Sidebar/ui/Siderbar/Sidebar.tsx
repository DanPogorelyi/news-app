import { useState } from 'react';

import { classNames } from 'shared/libs';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';

import { useTranslation } from 'react-i18next';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20x20.svg';
import AbountIcon from 'shared/assets/icons/about-20x20.svg';
import cls from './Sidebar.module.scss';

type Props = {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const handleToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.nav}>
                <AppLink
                    to={routePath.main}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.navItem}

                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('MAIN_PAGE', { ns: 'main' })}</span>
                </AppLink>
                <AppLink
                    to={routePath.about}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.navItem}
                >
                    <AbountIcon className={cls.icon} />
                    <span className={cls.link}>{t('ABOUT_PAGE', { ns: 'about' })}</span>
                </AppLink>
            </div>

            <Button
                square
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                onClick={handleToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
