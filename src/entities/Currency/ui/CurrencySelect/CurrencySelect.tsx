import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';
import { Select } from 'shared/ui/Select';

import { Currency } from '../../model/types/currency';

type Props = {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.RUB, content: Currency.RUB },
];

export const CurrencySelect = memo(({
    className,
    value,
    readonly,
    onChange,
}: Props) => {
    const { t } = useTranslation('profile');

    const handleChange = (value: string) => {
        onChange?.(value as Currency);
    };

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('CURRENCY')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={handleChange}
        />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
