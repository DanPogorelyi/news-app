import {
    MouseEvent, ReactNode, useCallback, useEffect, useState,
} from 'react';

import { classNames } from 'shared/libs';
import { Portal } from 'shared/ui/Portal';

import { Mods } from 'shared/libs/classNames/classNames';
import cls from './Modal.module.scss';

type Props = {
    className?: string;
    children?: ReactNode;
    lazy?: boolean;
    isOpen?: boolean; // required?
    onClose?: () => void; // required?
}

export const Modal = ({
    className,
    children,
    isOpen,
    lazy,
    onClose,
}: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose?.();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

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

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    if (lazy && !isMounted) {
        return null;
    }

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
