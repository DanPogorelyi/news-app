import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import cls from './LoginForm.module.scss';

type Props = {
    className?: string;
}

export const LoginForm = ({ className }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t('ENTER_NAME')} className={cls.input} autoFocus />
            <Input placeholder={t('ENTER_PASSWORD')} className={cls.input} />
            <Button className={cls.loginBtn}>{t('LOGIN')}</Button>
        </div>
    );
};
