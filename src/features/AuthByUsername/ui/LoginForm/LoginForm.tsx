import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/libs';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import { Text, TextTheme } from 'shared/ui/Text';
import {
    DynamicModuleLoader, ReducersMap,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export type Props = {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersMap = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: Props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const userName = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const handleUserNameChange = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const handlePasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleLoginClick = async () => {
        const result = await dispatch(loginByUserName({
            password,
            username: userName,
        }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    };

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
