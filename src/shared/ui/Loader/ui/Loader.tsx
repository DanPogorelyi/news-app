import { classNames } from 'shared/libs';

import './Loader.scss';

type Props = {
    className?: string;
}

export const Loader = ({ className }: Props) => (
    <div className={classNames('lds-dual-ring', {}, [className])} />
);
