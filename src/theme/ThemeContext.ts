import {createContext, Dispatch, SetStateAction} from "react";

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContext {
    theme?: Theme;
    setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContext>({});