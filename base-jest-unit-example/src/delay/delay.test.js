const delay = require('./delay');

describe('Delay', () => {
    test('Correct value', async () => {
        const sum = await delay(() => 5 + 5, 1000);
        expect(sum).toBe(10);
    })
})