import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import {classNames} from "shared/libs";

import cls from './AppLink.module.scss';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

type Props = LinkProps & {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<Props> = ({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};