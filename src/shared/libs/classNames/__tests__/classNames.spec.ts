import { classNames } from '../classNames';

describe('classNames', () => {
    it('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    it('with additional classes', () => {
        const classes = classNames('someClass', {}, ['class1', 'class2']);
        const expected = 'someClass class1 class2';

        expect(classes).toBe(expected);
    });

    it('with mods true', () => {
        const classes = classNames(
            'someClass',
            { hovered: true },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered';

        expect(classes).toBe(expected);
    });

    it('with mods false', () => {
        const classes = classNames(
            'someClass',
            { scrollable: false, hovered: true },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered';

        expect(classes).toBe(expected);
    });

    it('with mods undefined', () => {
        const classes = classNames(
            'someClass',
            { scrollable: undefined, hovered: true },
            ['class1', 'class2'],
        );
        const expected = 'someClass class1 class2 hovered';

        expect(classes).toBe(expected);
    });
});
