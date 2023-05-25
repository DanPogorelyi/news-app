import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseTheme {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const resultTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme(resultTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, resultTheme);
    };

    return { theme, toggleTheme };
};
