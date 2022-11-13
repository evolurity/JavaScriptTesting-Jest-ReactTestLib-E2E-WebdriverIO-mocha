const square = require('./square');

describe('Square', () => {
    let mockValue;
    // Перед каждым тестом
    beforeEach(() => {
        mockValue = Math.random()
    })
    // Один раз перед всеми
    beforeAll(() => {
    })
    test('Correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();

        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2)
        expect(spyMathPow).toBeCalledTimes(1);
    })

    test('To be called 0', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
    afterAll(() => {
    })
})