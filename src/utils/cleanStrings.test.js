import CleanString from './cleanStrings';

describe('CleanString Util', () => {
    it('should be able to use the function "toPropertyValue" to change spaces to hyphens', () => {
        const testString = 'A String With Spaces';

        const resultTestString = CleanString.toPropertyValue(testString);

        expect(resultTestString).toBe('A-String-With-Spaces');
    });
});