import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

type Props = {
    className?: string;
}

export const ProfilePageHeader = ({ className }: Props) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);

    const handleEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const handleCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const handleSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const canEdit = authData?.id === profileData?.id;

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('PROFILE')} />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={handleEdit}
                        >
                            {t('EDIT')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={cls.editBtn}
                                onClick={handleCancel}
                            >
                                {t('CANCEL')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.saveBtn}
                                onClick={handleSave}
                            >
                                {t('SAVE')}
                            </Button>
                        </>
                    )}
                </div>
            )}

        </div>
    );
};
