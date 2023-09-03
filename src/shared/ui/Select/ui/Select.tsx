import { ChangeEvent } from 'react';

import { classNames } from 'shared/libs';
import { Mods } from 'shared/libs/classNames/classNames';
import cls from './Select.module.scss';

export type SelectOption<T extends string> = {
    value: T;
    content: string;
}

type Props<T extends string> = {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    readonly?: boolean;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: Props<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
};
