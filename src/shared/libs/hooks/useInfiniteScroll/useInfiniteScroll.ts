import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScroll {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({ wrapperRef, triggerRef, callback }: UseInfiniteScroll) => {
    useEffect(() => {
        let observer: IntersectionObserver;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver((entries) => {
                const [entry] = entries;

                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
