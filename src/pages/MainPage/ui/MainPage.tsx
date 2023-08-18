import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Page } from 'shared/ui/Page';

const MainPage = () => {
    const { t } = useTranslation();

    const [inputValue, setInputValue] = useState('');

    const handleChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <Page>
            <Input value={inputValue} onChange={handleChange} />
            {t('MAIN_PAGE')}
        </Page>
    );
};

export default MainPage;
