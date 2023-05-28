import { useState } from 'react';

import { classNames } from 'shared/libs';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';

import { useTranslation } from 'react-i18next';
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
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={handleToggle}>{t('TOGGLE')}</Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
