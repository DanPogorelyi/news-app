import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox';
import { Country } from '../../model/types/country';

type Props = {
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options = Object.entries(Country).map(([value, content]) => ({ value, content }));

export const CountrySelect = memo(({
    value,
    readonly,
    onChange,
}: Props) => {
    const { t } = useTranslation('profile');

    const handleChange = (value: any) => {
        onChange?.(value as Country);
    };

    return (
        <ListBox
            label={t('COUNTRY')}
            options={options}
            value={value}
            readonly={readonly}
            direction="top"
            onChange={handleChange}
        />
    );
});

CountrySelect.displayName = 'CountrySelect';
