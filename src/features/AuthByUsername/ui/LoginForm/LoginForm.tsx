import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/libs';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import { Text, TextTheme } from 'shared/ui/Text';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

type Props = {
    className?: string;
}

export const LoginForm = memo(({ className }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        userName, password, error, isLoading,
    } = useSelector(getLoginState);

    const handleUserNameChange = (value: string) => {
        dispatch(loginActions.setUserName(value));
    };

    const handlePasswordChange = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const handleLoginClick = () => {
        dispatch(loginByUserName({ username: userName, password }));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('LOGIN_FORM')} />
            {error && <Text theme={TextTheme.ERROR} text={t('LOGIN_ERROR')} />}
            <Input
                autoFocus
                value={userName}
                className={cls.input}
                placeholder={t('ENTER_NAME')}
                onChange={handleUserNameChange}
            />
            <Input
                value={password}
                className={cls.input}
                placeholder={t('ENTER_PASSWORD')}
                onChange={handlePasswordChange}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
                onClick={handleLoginClick}
            >
                {t('LOGIN')}
            </Button>
        </div>
    );
});

LoginForm.displayName = 'LoginForm';
