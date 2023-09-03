import React, { HTMLAttributes, ReactNode } from 'react';

import { classNames } from 'shared/libs';

import cls from './Card.module.scss';

export const enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = ({
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
}: Props) => (
    <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </div>
);
