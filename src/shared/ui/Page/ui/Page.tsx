import { MutableRefObject, ReactNode, useRef } from 'react';

import { classNames } from 'shared/libs';
import { useInfiniteScroll } from 'shared/libs/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

type Props = {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: Props) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
