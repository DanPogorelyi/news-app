import {classNames} from "shared/libs";

import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

type Props = {
    className?: string;
}

export const Navbar = ({className}: Props) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink
                    to='/'
                    theme={AppLinkTheme.INVERTED}
                >
                    Main
                </AppLink>
                <AppLink
                    to='/about'
                    theme={AppLinkTheme.INVERTED}
                >
                    About
                </AppLink>
            </div>
        </div>
    );
};
