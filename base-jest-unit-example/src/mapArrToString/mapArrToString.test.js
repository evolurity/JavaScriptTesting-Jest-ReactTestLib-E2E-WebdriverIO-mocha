const mapArrToString = require('./mapArrToString');

describe('Map Array to String', () => {
    test('Correct value', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('Some values', () => {
        expect(mapArrToString([1, 2, 3, undefined, null, 'vfdvdfvf'])).toEqual(['1', '2', '3']);
    })
    test('Empty arr', () => {
        expect(mapArrToString([])).toEqual([]);
    })
    test('with not', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '3']);
    })
})