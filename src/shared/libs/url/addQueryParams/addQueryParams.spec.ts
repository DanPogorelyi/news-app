import { getQueryParams } from '../addQueryParams/addQueryParams';

const setLocationSearch = (search: string) => {
    delete (window as any).location;
    (window as any).location = new URL(`http://example.com${search}`);
};

describe('getQueryParams', () => {
    it('should return a query string with new params', () => {
        const params = {
            q: 'test',
            page: '1',
        };

        expect(getQueryParams(params)).toBe('?q=test&page=1');
    });

    it('should return a query string with new params and existing params', () => {
        setLocationSearch('?existingParam=existingValue');

        const result = getQueryParams({ newParam: 'newValue' });

        expect(result).toBe('?existingParam=existingValue&newParam=newValue');
    });

    it('should overwrite existing params with new values', () => {
        setLocationSearch('?foo=bar');

        const result = getQueryParams({ foo: 'qux' });

        expect(result).toBe('?foo=qux');
    });

    it('should return the original query string unchanged when provided with an empty params object', () => {
        setLocationSearch('?foo=bar');

        const result = getQueryParams();

        expect(result).toBe('?foo=bar');
    });

    it('should return a query string with no params if both original and new params are empty', () => {
        setLocationSearch('');

        expect(getQueryParams()).toBe('?');
    });
});
