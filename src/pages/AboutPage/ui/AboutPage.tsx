import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('ABOUT_PAGE')}
        </Page>
    );
};

export default AboutPage;
