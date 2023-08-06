import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/libs';
import { getUserAuthData } from 'entities/User';

import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

type Props = {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: Props) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && item.isAuthOnly) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.INVERTED}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
