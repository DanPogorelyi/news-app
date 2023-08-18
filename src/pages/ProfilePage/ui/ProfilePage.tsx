import { useCallback } from 'react';
import { classNames } from 'shared/libs';
import {
    DynamicModuleLoader,
    ReducersMap,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import {
    getProfileValidateErrors,
} from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

type Props = {
    className?: string;
}

const initialReducers: ReducersMap = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: Props) => {
    const { id } = useParams();

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const handleChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    }, [dispatch]);

    const handleChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) }));
    }, [dispatch]);

    const handleChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
    }, [dispatch]);

    const handleChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);

    const handleChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('SERVER_ERROR'),
        [ValidateProfileError.NO_DATA]: t('NO_DATA'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('INCORRECT_USER_DATA'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('INCORRECT_USER_AGE'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('INCORRECT_USER_COUNTRY'),
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length ? validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorsTranslate[error]}
                    />
                )) : null}
                <ProfileCard
                    data={form}
                    error={error}
                    readonly={readonly}
                    isLoading={isLoading}
                    onChangeAge={handleChangeAge}
                    onChangeCity={handleChangeCity}
                    onChangeFirstName={handleChangeFirstName}
                    onChangeLastName={handleChangeLastName}
                    onChangeUsername={handleChangeUsername}
                    onChangeAvatar={handleChangeAvatar}
                    onChangeCurrency={handleChangeCurrency}
                    onChangeCountry={handleChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

/*
* const readonly = useSelector(getProfileReadonly); в ProfilePage и в ProfilePageHeader
* хотя в теории можно было бы передать пропсом
*
* если handler не имеют спицифичных валидаторов, то можно использовать один с передачей названия поля
* */
