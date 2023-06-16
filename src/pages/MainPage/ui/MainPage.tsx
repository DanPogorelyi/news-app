import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [inputValue, setInputValue] = useState('');

    const handleChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <div>
            <Input value={inputValue} onChange={handleChange} />
            {t('MAIN_PAGE')}
        </div>
    );
};

export default MainPage;
