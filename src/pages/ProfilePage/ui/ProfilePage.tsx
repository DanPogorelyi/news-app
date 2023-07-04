import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';
import {
    DynamicModuleLoader,
    ReducersMap,
} from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

type Props = {
    className?: string;
}

const initialReducers: ReducersMap = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: Props) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>{t('PROFILE_PAGE')}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
