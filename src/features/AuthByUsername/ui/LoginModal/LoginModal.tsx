import { Modal } from 'shared/ui/Modal';
import { classNames } from 'shared/libs';
import { LoginForm } from '../LoginForm/LoginForm';

interface Props {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: Props) => (
    <Modal
        lazy
        isOpen={isOpen}
        className={classNames('', {}, [className])}
        onClose={onClose}
    >
        <LoginForm />
    </Modal>
);
