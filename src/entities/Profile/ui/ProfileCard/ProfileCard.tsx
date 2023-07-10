import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

type Props = {
    className?: string;
}

export const ProfileCard = ({ className }: Props) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('PROFILE')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('EDIT')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    className={cls.input}
                    value={data?.firstname}
                    placeholder={t('YOUR_FIRST_NAME')}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('YOUR_LAST_NAME')}
                />
            </div>
        </div>
    );
};
