import { classNames } from 'shared/libs';

import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

type Props = {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
}: Props) => (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
);
