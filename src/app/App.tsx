import {Link} from "react-router-dom";

import {AppRouter} from "app/providers/Router";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/libs";

import './styles/index.scss';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>

            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>

            <AppRouter />
        </div>
    );
};
