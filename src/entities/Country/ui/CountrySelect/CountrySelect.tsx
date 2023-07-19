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

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Armenia, content: Country.Armenia },
];

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
