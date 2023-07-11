import { classNames } from 'shared/libs';

import {
    InputHTMLAttributes, memo, ChangeEvent, useRef, useEffect,
} from 'react';
import cls from './Input.module.scss';

type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

type Props = InputType & {
    className?: string;
    value?: string;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo(({
    className,
    type = 'text',
    value,
    autoFocus,
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

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                ref={inputRef}
                type={type}
                value={value}
                className={cls.input}
                onChange={handleInputChange}
                {...otherProps}
            />
        </div>
    );
});

Input.displayName = 'Input';
