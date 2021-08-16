import circleArea from '../libraries/shapeFactory';

describe('Circle Tests', () => {
    test('Calculate area of Circle with 20 as radius is ', () => {
        expect(circleArea(20)).toBe(1256.6370614359173);
    });
    test('Testing 0 will be false', () => {
        expect(circleArea(0)).toBe(0);
    });
   
})