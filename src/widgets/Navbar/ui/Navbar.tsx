import { classNames } from 'shared/libs';

import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

type Props = {
    className?: string;
}

export const Navbar = ({ className }: Props) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                theme={AppLinkTheme.INVERTED}
            >
                Main
            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkTheme.INVERTED}
            >
                About
            </AppLink>
        </div>
    </div>
);
