import firstLetterIsCaps from '../libraries/stringFactory';

describe('Testing first letters', () => {
    test('Blank will be false', () => {
        expect(firstLetterIsCaps("")).toBe(false);
    })
})
