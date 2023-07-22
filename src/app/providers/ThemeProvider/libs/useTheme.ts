import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseTheme {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseTheme => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let resultTheme: Theme;

        switch (theme) {
        case Theme.DARK: {
            resultTheme = Theme.LIGHT;
            break;
        }
        case Theme.LIGHT: {
            resultTheme = Theme.ORANGE;
            break;
        }
        case Theme.ORANGE: {
            resultTheme = Theme.DARK;
            break;
        }
        default: {
            resultTheme = Theme.LIGHT;
        }
        }

        setTheme?.(resultTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, resultTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
