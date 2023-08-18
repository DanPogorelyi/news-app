import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import cls from './Navbar.module.scss';

type Props = {
    className?: string;
}

export const Navbar = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={handleLogout}
                >
                    {t('LOGOUT')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={handleOpenModal}
            >
                {t('LOGIN')}
            </Button>
            {isModalOpen && (
                <LoginModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </header>
    );
});

Navbar.displayName = 'Navbar';
