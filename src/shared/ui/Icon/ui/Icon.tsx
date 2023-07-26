import { classNames } from 'shared/libs';

import React from 'react';
import cls from './Icon.module.scss';

type Props = {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = ({ className, Svg }: Props) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
);
