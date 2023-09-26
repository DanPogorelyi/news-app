import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { classNames } from 'shared/libs';
import { Mods } from 'shared/libs/classNames/classNames';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around';

type FlexAlign = 'start' | 'end' | 'center' | 'stretch';

type FlexDirection = 'row' | 'column';

type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
    stretch: cls.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type FlexProps = DivProps & {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = ({
    className,
    children,
    direction = 'row',
    justify = 'start',
    align = 'center',
    gap,
    max,
    ...props
}: FlexProps) => {
    const classes = [
        className,
        directionClasses[direction],
        justifyClasses[justify],
        alignClasses[align],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...props}>
            {children}
        </div>
    );
};
