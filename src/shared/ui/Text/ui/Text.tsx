import { classNames } from 'shared/libs';

import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export const enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left'
}

export const enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

type Props = {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize
}

export const Text = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
}: Props) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
);
