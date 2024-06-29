import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    it('should return the base class name when no mods or additional classes are provided', () => {
        expect(classNames('base-class')).toBe('base-class');
    });

    it('should include additional classes', () => {
        expect(classNames('base-class', {}, ['additional-class'])).toBe(
            'base-class additional-class',
        );
    });

    it('should include mods that are true', () => {
        expect(
            classNames('base-class', { 'mod-true': true, 'mod-false': false }),
        ).toBe('base-class mod-true');
    });

    it('should include both additional classes and mods', () => {
        expect(
            classNames('base-class', { 'mod-true': true }, ['additional-class']),
        ).toBe('base-class additional-class mod-true');
    });

    it('should handle mods with string values', () => {
        expect(classNames('base-class', { 'mod-string': 'value' })).toBe(
            'base-class mod-string',
        );
    });

    it('should filter out falsy additional classes', () => {
        expect(classNames('base-class', {}, ['additional-class', ''])).toBe(
            'base-class additional-class',
        );
    });

    it('should handle empty base class', () => {
        expect(classNames('', { 'mod-true': true }, ['additional-class'])).toBe(
            ' additional-class mod-true',
        );
    });

    it('should handle empty mods and additional classes', () => {
        expect(classNames('base-class', {}, [])).toBe('base-class');
    });

    it('should handle all empty inputs', () => {
        expect(classNames('', {}, [])).toBe('');
    });
});
