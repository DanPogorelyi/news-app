import { classNames } from 'shared/libs';
import { Loader } from 'shared/ui/Loader';

import cls from './PageLoader.module.scss';

type Props = {
    className?: string;
}

export const PageLoader = ({ className }: Props) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
