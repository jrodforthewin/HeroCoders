import circleArea from '../libraries/shapeFactory';

describe('Circle Tests', () => {
  test('Calculate area of Circle with 20 as radius is ', () => {
    expect(circleArea(20)).toBe(1256.6370614359173);
  });
  test('Testing 0 will be false', () => {
    expect(circleArea(0)).toBe(0);
  });
  test('Passing in a string should be NaN', () => {
    expect(circleArea('jarrod')).toBe(0);
  });
  test('Passing in nothing evaluates to 0', () => {
    expect(circleArea()).toBe(0);
  });
  test('Passing in two arguments', () => {
    expect(circleArea(1, 2)).toBe(3.141592653589793);
  });
  test('Sending an object will make it 0', () => {
    const cars = ['Saab', 'Volvo', 'BMW'];
    expect(circleArea(cars)).toBe(0);
  });
});
