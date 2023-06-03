import {
    MouseEvent, ReactNode, useCallback, useEffect,
} from 'react';

import { classNames } from 'shared/libs';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

type Props = {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean; // required?
    onClose?: () => void; // required?
}

export const Modal = ({
    className, children, isOpen, onClose,
}: Props) => {
    const { theme } = useTheme();

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose?.();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    const handleClose = () => {
        onClose?.();
    };

    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls[theme]]: true,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleContentClick}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
