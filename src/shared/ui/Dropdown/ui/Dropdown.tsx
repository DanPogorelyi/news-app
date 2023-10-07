import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { classNames } from 'shared/libs';
import { DropdownDirection } from 'shared/types/ui';

import { AppLink } from '../../AppLink';
import cls from './Dropdown.module.scss';

export type DropdownOption = {
    content?: ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
}

type Props = {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    options: DropdownOption[];
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export const Dropdown = ({
    className,
    trigger,
    options,
    direction = 'bottom right',
}: Props) => {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {options.map((option) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={option.disabled}
                            className={classNames(cls.item, { [cls.active]: active })}
                            onClick={option.onClick}
                        >
                            {option.content}
                        </button>
                    );

                    if (option.href) {
                        return (
                            <Menu.Item as={AppLink} to={option.href} disabled={option.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={option.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
