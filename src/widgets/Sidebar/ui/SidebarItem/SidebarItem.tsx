import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/libs';
import cls from './SidebarItem.module.scss';

type Props = {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: Props) => {
    const { t } = useTranslation();

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