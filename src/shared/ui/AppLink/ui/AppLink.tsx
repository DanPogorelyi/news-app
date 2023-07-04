import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/libs';

import cls from './AppLink.module.scss';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    RED = 'red'
}

type Props = LinkProps & {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink = memo(({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: Props) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
));

AppLink.displayName = 'AppLink';
