import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs';
import { Button, ButtonTheme } from '../../Button';

type Props = {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: Props) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}
        >
            {t(short ? 'SHORT_LANGUAGE' : 'LANGUAGE')}
        </Button>
    );
};
