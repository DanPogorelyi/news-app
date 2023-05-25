import { useState } from "react";
import {classNames} from "shared/libs";

import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

type Props = {
    className?: string;
}

export const Sidebar = ({className}: Props) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed(prevState => !prevState);
    };

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={handleToggle}>toggle sidebar</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};