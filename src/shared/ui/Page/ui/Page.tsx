import {
    MutableRefObject,
    ReactNode,
    UIEvent,
    useRef,
} from 'react';
import { useLocation } from 'react-router-dom';

import { classNames } from 'shared/libs';
import { useInfiniteScroll } from 'shared/libs/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';

import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/libs/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

type Props = {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: Props) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const location = useLocation();

    const scrollPosition = useSelector(
        (state: StateSchema) => getUIScrollByPath(state, location.pathname),
    );

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        if (scrollPosition) {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    });

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            path: location.pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 300);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={handleScroll}
        >
            {children}
            <div className={cls.trigger} ref={triggerRef} />
        </section>
    );
};
