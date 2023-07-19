import { classNames } from 'shared/libs';

import {
    InputHTMLAttributes, memo, ChangeEvent, useRef, useEffect,
} from 'react';
import { Mods } from 'shared/libs/classNames/classNames';
import cls from './Input.module.scss';

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'readOnly' | 'onChange'>

type Props = InputType & {
    className?: string;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo(({
    className,
    type = 'text',
    value,
    autoFocus,
    readonly,
    onChange,
    ...otherProps
}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <input
                ref={inputRef}
                type={type}
                value={value}
                readOnly={readonly}
                className={cls.input}
                onChange={handleInputChange}
                {...otherProps}
            />
        </div>
    );
});

Input.displayName = 'Input';
