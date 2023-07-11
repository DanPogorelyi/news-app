export type Mods = Record<string, boolean | string | undefined>

export const classNames = (
    className: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => [
    className,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter((key) => mods[key]),
].join(' ');
