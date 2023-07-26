import { classNames } from 'shared/libs';

import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

type Props = {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

export const Skeleton = ({
    className,
    width,
    height,
    border,
}: Props) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
    );
};
