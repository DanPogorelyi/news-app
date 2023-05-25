import { useTranslation } from 'react-i18next';

import {classNames} from "shared/libs";
import {Button, ThemeButton} from "shared/ui/Button";

import cls from './LangSwitcher.module.scss';

type Props = {
    className?: string;
}

export const LangSwitcher = ({className}: Props) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLanguage}
        >
            {t('Language')}
        </Button>
    );
};
