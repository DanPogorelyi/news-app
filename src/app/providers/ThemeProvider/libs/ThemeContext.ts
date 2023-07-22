import { createContext, Dispatch, SetStateAction } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme'
}

export type ThemeContextType = {
    theme?: Theme;
    setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({});
