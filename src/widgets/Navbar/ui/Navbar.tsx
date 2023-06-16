import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

type Props = {
    className?: string;
}

export const Navbar = ({ className }: Props) => {
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={handleOpenModal}
            >
                {t('LOGIN')}
            </Button>
            <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};
