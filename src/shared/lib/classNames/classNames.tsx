type Mods = Record<string, boolean | string>

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        // eslint-disable-next-line no-unused-vars
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');
// const result = classNames(
//     'remove-btn',
//     { hovered: false, selectable: true, red: true },
//     ['pdg'],
// );
