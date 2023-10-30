import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';
import { useSelector } from 'react-redux';

import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

type Props = {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: Props) => {
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
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('PROFILE')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={handleEdit}
                        >
                            {t('EDIT')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={handleCancel}
                            >
                                {t('CANCEL')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={handleSave}
                            >
                                {t('SAVE')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </HStack>
    );
};
