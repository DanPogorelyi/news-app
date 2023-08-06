import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/libs';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

import cls from './Sidebar.module.scss';

type Props = {
    className?: string;
}

export const Sidebar = memo(({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);

    const handleToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.nav}>
                {sidebarItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
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
});

Sidebar.displayName = 'Sidebar';
