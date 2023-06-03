import { classNames } from 'shared/libs';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

type Props = {
    className?: string;
}

export const Navbar = ({ className }: Props) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleModal}>Log in</Button>
            <Modal isOpen={isAuthModal} onClose={toggleModal}>123</Modal>
        </div>
    );
};
