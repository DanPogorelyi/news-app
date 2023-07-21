import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/country';

type Props = {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options = Object.entries(Country).map(([value, content]) => ({ value, content }));

export const CountrySelect = memo(({
    className,
    value,
    readonly,
    onChange,
}: Props) => {
    const { t } = useTranslation('profile');

    const handleChange = (value: string) => {
        onChange?.(value as Country);
    };

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('COUNTRY')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={handleChange}
        />
    );
});

CountrySelect.displayName = 'CountrySelect';
