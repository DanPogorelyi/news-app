import { classNames } from 'shared/libs';
import { CSSProperties, memo } from 'react';

import { Mods } from 'shared/libs/classNames/classNames';
import cls from './Avatar.module.scss';

type Props = {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo(({
    src,
    alt,
    size,
    className,
}: Props) => {
    const mods: Mods = {};

    const styles: CSSProperties = {
        width: size,
        height: size,
    };

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
});

Avatar.displayName = 'Avatar';
