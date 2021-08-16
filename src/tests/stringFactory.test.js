import firstLetterIsCaps from '../libraries/stringFactory';

describe('Testing first letters', () => {
  test('Blank will be false', () => {
    expect(firstLetterIsCaps('')).toBe(false);
  });
  test('Jarrod will be true', () => {
    expect(firstLetterIsCaps('Jarrod')).toBe(true);
  });
  test('jarrod will be false', () => {
    expect(firstLetterIsCaps('jarrod')).toBe(false);
  });
  test('1234 will be false', () => {
    expect(firstLetterIsCaps(1234)).toBe(false);
  });
});
