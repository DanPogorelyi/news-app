import { FC, ButtonHTMLAttributes } from "react";
import {classNames} from "shared/libs";

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<Props> = ({children, className, theme, ...otherProps}) => {
    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};