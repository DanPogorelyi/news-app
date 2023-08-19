import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const throttle = useRef(false);
    const timer = useRef<NodeJS.Timer>();

    useEffect(() => () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }, []);

    return useCallback((...args) => {
        if (!throttle.current) {
            callback(...args);
            throttle.current = true;

            timer.current = setTimeout(() => {
                throttle.current = false;
            }, delay);
        }
    }, [callback, delay]);
};
