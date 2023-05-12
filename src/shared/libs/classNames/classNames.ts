type Mods = Record<string, boolean>

export const classNames = (className: string, mods: Mods, additional: string[]): string => {
    return [
        className,
        ...additional,
        ...Object.keys(mods).filter(key => mods[key])
    ].join(' ');
};

