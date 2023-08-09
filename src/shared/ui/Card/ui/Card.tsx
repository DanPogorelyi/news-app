import React, { HTMLAttributes, ReactNode } from 'react';

import { classNames } from 'shared/libs';

import cls from './Card.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = ({
    className,
    children,
    ...otherProps
}: Props) => (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
        {children}
    </div>
);
