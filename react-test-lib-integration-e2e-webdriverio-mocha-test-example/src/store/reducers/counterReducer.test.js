import counter, {decrement, increment} from "./counter";

describe('REDUCER TEST', () => {
    test('increment', () => {
        expect(counter({value: 0}, increment())).toEqual({value: 1})
    })

    test('decrement', () => {
        expect(counter({value: 0}, decrement())).toEqual({value: -1})
    })

    test('with empty state', () => {
        expect(counter(undefined, decrement())).toEqual({value: -1})
        expect(counter(undefined, increment())).toEqual({value: 1})
    })


})