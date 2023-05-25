import {classNames} from "shared/libs";

import cls from './ThemeSwitcher.module.scss';
import {useTheme, Theme} from "app/providers/ThemeProvider";

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button";

type Props = {
    className?: string;
}

export const ThemeSwitcher = ({className}: Props) => {
    const {theme, toggleTheme} = useTheme();

    const icon = theme === Theme.DARK ? <DarkIcon /> : <LightIcon />;

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {icon}
        </Button>
    );
};