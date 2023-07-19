import { ChangeEvent, memo } from 'react';

import { classNames } from 'shared/libs';
import { Mods } from 'shared/libs/classNames/classNames';
import cls from './Select.module.scss';

type Option = {
    value: string;
    content: string;
}

type Props = {
    className?: string;
    label?: string;
    options?: Option[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = memo(({
    className,
    label,
    options,
    value,
    readonly,
    onChange,
}: Props) => {
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                name=""
                id=""
                value={value}
                disabled={readonly}
                className={cls.select}
                onChange={handleSelectChange}
            >
                {options?.map((opt) => (
                    <option
                        key={opt.value}
                        value={opt.value}
                    >
                        {opt.content}
                    </option>
                ))}
            </select>
        </div>
    );
});

Select.displayName = 'Select';
