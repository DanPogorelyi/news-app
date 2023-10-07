import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames } from 'shared/libs';
import { DropdownDirection } from 'shared/types/ui';
import { VStack } from '../../Stack';
import { Button } from '../../Button';
import cls from './ListBox.module.scss';

type ListBoxItem = {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type ListBoxProps = {
    options?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    className?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    onChange: <T>(value: T) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export const ListBox = ({
    options,
    className,
    value,
    defaultValue,
    readonly,
    direction = 'bottom right',
    label,
    onChange,
}: ListBoxProps) => {
    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <VStack gap="4">
            {label && <span>{label}</span>}
            <HListBox
                as="div"
                value={value}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                onChange={onChange}
            >
                <HListBox.Button as={Fragment}>
                    <Button>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {options?.map((option) => (
                        <HListBox.Option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.option, {
                                    [cls.active]: active,
                                    [cls.disabled]: option.disabled,
                                })}
                                >
                                    {selected && '!!!'}
                                    {option.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </VStack>
    );
};
