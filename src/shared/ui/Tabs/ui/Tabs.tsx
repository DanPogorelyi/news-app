import { memo, ReactNode } from 'react';

import { classNames } from 'shared/libs';

import { Card, CardTheme } from 'shared/ui/Card';
import cls from './Tabs.module.scss';

export type Tab = {
    value: string;
    content: ReactNode;
};

type Props = {
    className?: string;
    tabs: Tab[];
    value: string;
    onClick: (tab: Tab) => void;
}

export const Tabs = memo(({
    className,
    tabs,
    value,
    onClick,
}: Props) => (
    <div className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab) => (
            <Card
                key={tab.value}
                className={cls.tab}
                theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                onClick={() => onClick(tab)}
            >
                {tab.content}
            </Card>
        ))}
    </div>
));

Tabs.displayName = 'Tabs';
