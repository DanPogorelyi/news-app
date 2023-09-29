import { memo } from 'react';
import { useTranslation } from 'react-i18next';
// import { classNames } from 'shared/libs';
import { ListBox } from 'shared/ui/ListBox';

// import { Listbox } from '@headlessui/react';
import { Currency } from '../../model/types/currency';

type Props = {
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options = Object.entries(Currency).map(([value, content]) => ({ value, content }));

export const CurrencySelect = memo(({
    value,
    readonly,
    onChange,
}: Props) => {
    const { t } = useTranslation('profile');

    const handleChange = (value: any) => {
        onChange?.(value as Currency);
    };

    return (
        <ListBox
            value={value}
            options={options}
            readonly={readonly}
            label={t('CURRENCY')}
            onChange={handleChange}
        />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
