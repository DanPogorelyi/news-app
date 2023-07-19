import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { Text, TextTheme } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { Mods } from 'shared/libs/classNames/classNames';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

type Props = {
    className?: string;
    data?: Profile;
    error?: string;
    readonly?: boolean;
    isLoading?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    error,
    readonly,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
}: Props) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('LOAD_ERROR_TITLE')}
                    text={t('LOAD_ERROR_TEXT')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} alt="User Avatar" />
                    </div>
                )}
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    readonly={readonly}
                    placeholder={t('YOUR_FIRST_NAME')}
                    onChange={onChangeFirstName}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    readonly={readonly}
                    placeholder={t('YOUR_LAST_NAME')}
                    onChange={onChangeLastName}
                />
                <Input
                    className={cls.input}
                    type="number"
                    value={data?.age}
                    readonly={readonly}
                    placeholder={t('AGE')}
                    onChange={onChangeAge}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    readonly={readonly}
                    placeholder={t('CITY')}
                    onChange={onChangeCity}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    readonly={readonly}
                    placeholder={t('USERNAME')}
                    onChange={onChangeUsername}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    readonly={readonly}
                    placeholder={t('AVATAR')}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    readonly={readonly}
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    readonly={readonly}
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
